const puppeteer = require("puppeteer");

const criarPdf = async (req, res) => {
  const { htmlContent } = req.body;
  const pdf = await generatePDFfromHTML(htmlContent);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="generated.pdf"');
  res.send(Buffer.from(pdf));
};

async function generatePDFfromHTML(htmlContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "domcontentloaded" });
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
  });
  await browser.close();
  return pdfBuffer;
}

module.exports = { criarPdf };
