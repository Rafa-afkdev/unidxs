import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configurar el transportador de Nodemailer con SMTP de GoDaddy
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true para puerto 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verificar la conexión
    await transporter.verify();

    // Crear el contenido del email en HTML
    const emailBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 10px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 15px;
              padding-bottom: 15px;
              border-bottom: 1px solid #eee;
            }
            .label {
              font-weight: bold;
              color: #667eea;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
            }
            .message-box {
              background: #f5f5f5;
              padding: 15px;
              border-radius: 5px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 Nuevo Mensaje del Formulario de Contacto</h2>
              <p>UNIDXS WNC</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">📱 Teléfono:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">📋 Asunto:</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #667eea; text-align: center; color: #999; font-size: 12px;">
                <p>Este mensaje fue enviado desde el formulario de contacto de unidxswnc.org</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Configurar el email
    const mailOptions = {
      from: `"UNIDXS Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Enviar a tu propio email
      replyTo: email, // Para que puedas responder directamente al usuario
      subject: `📩 Contacto Web: ${subject}`,
      html: emailBody,
      text: `
Nuevo mensaje del formulario de contacto UNIDXS

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Asunto: ${subject}

Mensaje:
${message}
      `.trim(),
    };

    // Enviar el email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Proporcionar más detalles del error
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}
