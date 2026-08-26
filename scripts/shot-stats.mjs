import { chromium } from "playwright";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = join(__dirname, "..");
const NEXT_BIN = join(SITE, "node_modules", "next", "dist", "bin", "next");
const PORT = 3739; const BASE = `http://localhost:${PORT}`;
const OUT = "D:/dcf-screens/home-revisie";
let server = spawn(process.execPath, [NEXT_BIN, "start", "-p", String(PORT)], { cwd: SITE, stdio: ["ignore","pipe","pipe"] });
const stop = () => { try { spawnSync("taskkill",["/PID",String(server.pid),"/T","/F"],{stdio:"ignore"}); } catch {} };
process.on("exit", stop);
const t0=Date.now(); let up=false;
while (Date.now()-t0<60000){ try{const r=await fetch(BASE+"/",{signal:AbortSignal.timeout(2000)}); if(r.status<500){up=true;break;}}catch{} await new Promise(r=>setTimeout(r,500)); }
if(!up){console.error("geen server");process.exit(1);}
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport:{width:1440,height:900}, colorScheme:"dark" });
await ctx.addInitScript(() => localStorage.setItem("dcf-lang","nl"));
const page = await ctx.newPage();
await page.goto(BASE+"/", { waitUntil:"load" });
// scroll naar begin van stats-sectie (eerste paneel)
const secTop = await page.evaluate(() => {
  const el = document.querySelector("section.bg-ink");
  return window.scrollY + el.getBoundingClientRect().top;
});
const secH = await page.evaluate(() => document.querySelector("section.bg-ink").offsetHeight);
const total = secH - 900;
await page.evaluate((y)=>window.scrollTo({top:y,behavior:"instant"}), secTop + 0.1*total);
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/stats-panel1.png` });
// klik op vakje 3 (Besparing op aanbestedingskosten)
await page.click('button:has-text("Besparing op aanbestedingskosten")');
await page.waitForTimeout(1600);
await page.screenshot({ path: `${OUT}/stats-na-klik-3.png` });
await browser.close(); stop(); console.log("OK");
