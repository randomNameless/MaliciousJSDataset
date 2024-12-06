const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const urls = fs.readFileSync('urls.txt', 'utf-8').split('\n').filter(Boolean);

    let browser;
    try {
        browser = await puppeteer.launch({
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--ignore-certificate-errors', // For SSL issues
                '--disable-features=site-per-process' // Avoid specific Chromium flags
            ],
            ignoreDefaultArgs: ['--enable-external-memory-accounted-in-global-limit'], // Remove problematic flag
        });

        let page = await browser.newPage();

        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            console.log(`Visiting URL: ${url}`);
            const jsFiles = new Map();

            try {
                // Set up interception to block unnecessary resources
                await page.setRequestInterception(true);
                page.on('request', request => {
                    const blockedResources = ['image', 'stylesheet', 'font'];

                    // Ensure request is only handled once
                    if (!request.isInterceptResolutionHandled()) {
                        if (blockedResources.includes(request.resourceType())) {
                            request.abort();
                        } else {
                            request.continue();
                        }
                    }
                });

                page.on('response', async response => {
                    const requestUrl = response.url();
                    if (requestUrl.endsWith('.js')) {
                        try {
                            const jsContent = await response.text();
                            const fileName = path.basename(requestUrl.split('?')[0]);
                            jsFiles.set(fileName, jsContent);
                        } catch (err) {
                            console.error(`Failed to fetch JS file from ${requestUrl}:`, err.message);
                        }
                    }
                });

                await page.goto(url, { waitUntil: 'domcontentloaded' });

                const folderName = new URL(url).hostname.replace(/[^a-zA-Z0-9]/g, '_');
                const folderPath = path.join(__dirname, folderName);
                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath, { recursive: true });
                }

                for (const [fileName, content] of jsFiles) {
                    const filePath = path.join(folderPath, fileName);
                    fs.writeFileSync(filePath, content, 'utf-8');
                    console.log(`Saved JS file: ${filePath}`);
                }
                jsFiles.clear();
            } catch (err) {
                console.error(`Error processing URL ${url}:`, err.message);
            }

            // Restart browser periodically to avoid resource leaks
            if ((i + 1) % 50 === 0) {
                await browser.close();
                browser = await puppeteer.launch({
                    args: ['--no-sandbox', '--disable-setuid-sandbox'],
                });
                page = await browser.newPage();
            }
        }
    } catch (error) {
        console.error('Failed to launch or process Puppeteer:', error.message);
    } finally {
        if (browser) await browser.close();
        console.log('Done!');
    }
})();

