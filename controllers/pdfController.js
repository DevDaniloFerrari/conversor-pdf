const puppeteer = require("puppeteer");
const { enviarEmail } = require("../services/emailService");

const criarPdf = async (req, res) => {
  const { htmlContent } = req.body;
  const pdf = await generatePDFfromHTML(htmlContent);

  const mailOptions = {
    from: 'conversor-pdf@gmail.com', // Remetente
    to: 'daniloferrari2000@hotmail.com', // Destinatário
    subject: 'Teste de email com Node.js', // Assunto
    text: 'Este é um email de teste enviado usando Node.js e Nodemailer!',
    attachments: [
      {
        filename: 'arquivo.pdf', // Nome do arquivo que será anexado
        content: pdf, // Conteúdo do arquivo em buffer
        contentType: 'application/pdf', // Tipo de conteúdo do anexo
      },
    ],
  }

  enviarEmail(mailOptions)

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
