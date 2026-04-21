import mailer from "nodemailer";

export const sendMail = async (message: any) => {
  const smtpTransport = mailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  try {
    const info = await smtpTransport.sendMail(message);
    console.log("email sent", info);
    return info;
  } catch (err) {
    console.error("MAIL ERROR:", err);
    throw err;
  } finally {
    smtpTransport.close();
  }
};
