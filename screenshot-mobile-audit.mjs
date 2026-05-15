import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE_URL = 'http://localhost:5174';
const OUT = './screenshots/mobile-audit';

const DEVICES = [
  { name: 'iphone-se',     width: 375,  height: 667,  scale: 2 },
  { name: 'iphone-14',     width: 390,  height: 844,  scale: 3 },
  { name: 'pixel-7',       width: 412,  height: 915,  scale: 2.625 },
  { name: 'tablet-768',    width: 768,  height: 1024, scale: 2 },
];

mkdirSync(OUT, { recursive: true });

async function capture(device) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: device.width, height: device.height },
    deviceScaleFactor: device.scale,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const page = await context.newPage();

  await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
  // Let entrance animations finish
  await page.waitForTimeout(1800);

  // Full hero viewport shot
  await page.screenshot({
    path: `${OUT}/${device.name}-hero-viewport.png`,
    fullPage: false,
  });

  // Full page shot to see if anything breaks below the fold
  await page.screenshot({
    path: `${OUT}/${device.name}-full-page.png`,
    fullPage: true,
  });

  console.log(`✓ ${device.name} done`);
  await browser.close();
}

(async () => {
  for (const d of DEVICES) {
    await capture(d);
  }
  console.log(`\nAll screenshots saved to ${OUT}/`);
})();
