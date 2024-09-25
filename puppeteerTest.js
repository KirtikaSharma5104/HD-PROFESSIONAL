const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: true // Set to true for Jenkins or CI environment
        });
        const page = await browser.newPage();
        await page.goto('http://localhost:3000', {
            waitUntil: 'networkidle0' // Wait until no more than 0 connections for at least 500 ms.
        });

        // Take screenshot to verify functionality
        await page.screenshot({ path: 'example.png' });

        await browser.close();
    } catch (error) {
        console.error('Puppeteer error:', error);
        process.exit(1); // Exit with failure for Jenkins to catch errors
    }
})();
