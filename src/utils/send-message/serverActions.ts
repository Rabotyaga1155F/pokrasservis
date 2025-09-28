"use server";
import { sendMail } from "@/utils/send-message/mail";

export async function sendMessageToEmail(data: {
  name: string;
  phone: string;
  works: string;
}) {
  try {
    const htmlMessage = `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #2F855A; padding: 40px 0; font-family: Arial, sans-serif;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #2F855A; margin-bottom: 20px;">Новая заявка с сайта PS-POLYMER</h2>
            </td>
          </tr>
          <tr>
            <td style="font-size: 16px; color: #333; padding-top: 5px; padding-bottom: 5px;">
              <strong>Имя:</strong> ${data.name}
            </td>
          </tr>
          <tr>
            <td style="font-size: 16px; color: #333; padding-top: 10px; padding-bottom: 10px;">
              <strong>Телефон:</strong> <a href="tel:${data.phone}" style="color: #2F855A; text-decoration: none;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="font-size: 16px; color: #333; padding-top: 5px; padding-bottom: 5px;">
              <strong>Список работ:</strong> ${data.works}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;

    const message = {
      from: `PS-POLYMER <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT,
      subject: "Вам оставили заявку на сайте!",
      html: htmlMessage,
    };

    await sendMail(message);
  } catch (e) {
    console.log("Ошибка при отправке письма:", e);
  }
}
