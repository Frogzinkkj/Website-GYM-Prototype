const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
app.use(express.json());

// Configuração do transporte de e-mail
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Ou outro serviço de e-mail
  auth: {
    user: 'oficialanpef@gmail.com',
    pass: 'anpef0unica',
  },
});

// Rota para envio de e-mail
app.post('/send-confirmation', async (req, res) => {
  const { email } = req.body;

  // Gerar token único
  const token = crypto.randomBytes(20).toString('hex');

  // Construir link de confirmação
  const confirmationUrl = `http://seu-dominio.com/confirm-email?token=${token}`;

  // Enviar e-mail
  try {
    await transporter.sendMail({
      to: email,
      subject: 'Confirmação de E-mail',
      html: `<p>Por favor, confirme seu e-mail clicando no link abaixo:</p>
             <a href="${confirmationUrl}">Confirmar E-mail</a>`,
    });

    // Armazenar token no banco (exemplo, adicionar lógica ao seu banco de dados)
    console.log(`Token para ${email}: ${token}`);

    res.status(200).send('E-mail de confirmação enviado!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao enviar e-mail');
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
