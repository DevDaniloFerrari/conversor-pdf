const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// Configurações do transporte de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'devdaniloferrari@gmail.com', // Seu email Gmail
    pass: process.env.EMAIL_PASS, // Sua senha ou App Password
  },
});

// Enviando o email
const enviarEmail = (mailOptions) => transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erro ao enviar o email:', error);
  } else {
    console.log('Email enviado:', info.response);
  }
});

module.exports = { enviarEmail };
