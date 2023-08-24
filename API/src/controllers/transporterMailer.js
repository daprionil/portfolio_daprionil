const nodemailer = require('nodemailer');

//? Configurate Transporter to send mail
const { NODEMAILER_PASS, NODEMAILER_MAIL, NODEMAILER_MAIL_SEND } = process.env;
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: NODEMAILER_MAIL,
        pass: NODEMAILER_PASS,
    },
});


module.exports = async function ({ email, fullname, country, textHtml }) {
    //! Send mail with the options
    const responseMail = await transporter.sendMail({
        from: `${textHtml.slice(0,30) + '...'}${NODEMAILER_MAIL}`,
        to: NODEMAILER_MAIL_SEND,
        subject: `DAPRIONIL: CONTACT YOU - ${fullname}`,
        text: 'David Bulla tú perfil me ha interesado, te escribo este mensaje',
        html: `<!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta name="x-apple-disable-message-reformatting">
            <style>
                table, td, div, h1, p {font-family: Arial, sans-serif;}
            </style>
        </head>
        <body style="margin:0;padding:0;">
            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
                <tr>
                    <td align="center" style="padding:0;">
                        <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                            <tr>
                                <td align="center" style="padding:40px 0 30px 0;background:#70bbd9;">
                                    <img src="https://byspel.com/wp-content/uploads/2017/01/Email.png" alt="" width="300" style="height:auto;display:block;" />
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:26px 20px 32px 20px;">
                                    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                        <tr>
                                            <td style="padding:0 0 26px 0;color:#153643;">
                                                <p><b>Correo Eléctrónico Remitente:</b> ${email}</p>
                                                <p><b>Nombre completo:</b>${fullname}</p>
                                                <p><b>País de remitente:</b> ${country}</p>
                                                <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">${textHtml}</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>`
    });
    const {} = responseMail;
    return responseMail;
};