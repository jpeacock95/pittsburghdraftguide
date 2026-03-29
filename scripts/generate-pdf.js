const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const htmlPath = path.join(__dirname, 'generate-checklist-pdf.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  const outputPath = path.join(__dirname, '..', 'public', 'draft-weekend-checklist.pdf');
  await page.pdf({
    path: outputPath,
    format: 'Letter',
    margin: { top: '0.6in', right: '0.75in', bottom: '0.6in', left: '0.75in' },
    printBackground: true,
  });

  console.log('PDF generated:', outputPath);
  await browser.close();
})();
