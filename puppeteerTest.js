const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false // Set to false to see the browser action
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle0' // Wait until the network is idle (no more than 0 network connections for at least 500 ms).
  });
  // Add your testing interactions here
  await page.screenshot({ path: 'example.png' }); // Screenshot for testing confirmation

  await browser.close();
})();
