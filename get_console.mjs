import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.error('PAGE ERROR:', error));
  
  await page.goto('http://localhost:5176/divisions/piece-de-rechange/climatisation', { waitUntil: 'networkidle2' });
  
  await browser.close();
})();
