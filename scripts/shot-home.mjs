import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = join(__dirname, "..");
const NEXT_BIN = join(SITE, "node_modules", "next", "dist", "bin", "next");
const PORT = 3739;
const BASE = `http://localhost:${PORT}`;
const OUT = process.env.SHOT_OUT || "D:/dcf-screens/home-revisie";

let server = spawn(process.execPath, [NEXT_BIN, "start", "-p", String(PORT)], {
  cwd: SITE, stdio: ["ignore", "pipe", "pipe"],
});
const stop = () => { try { spawnSync("taskkill", ["/PID", String(server.pid), "/T", "/F"], { stdio: "ignore" }); } catch {} };
process.on("exit", stop);

const start = Date.now();
let up = false;
while (Date.now() - start < 60000) {
  try { const r = await fetch(BASE + "/", { signal: AbortSignal.timeout(2000) }); if (r.status < 500) { up = true; break; } } catch {}
  await new Promise((r) => setTimeout(r, 500));
}
if (!up) { console.error("server niet online"); process.exit(1); }

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
for (const lang of ["nl", "en"]) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: "dark" });
  await ctx.addInitScript((l) => localStorage.setItem("dcf-lang", l), lang);
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "load", timeout: 30000 });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/home-${lang}-fold.png` });
  const total = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < total; y += 540) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
    await page.waitForTimeout(180);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/home-${lang}-full.png`, fullPage: true });
  await ctx.close();
  console.log(`OK ${lang}`);
}
await browser.close();
stop();
console.log("KLAAR:", OUT);
