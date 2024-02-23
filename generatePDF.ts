import * as path from 'path';
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file:${path.join(__dirname, 'dist/index.html')}`);
  await page.pdf({
    path: 'dist/justin-schrader-resume.pdf',
    format: 'A4',
  });
  await browser.close();
})();
