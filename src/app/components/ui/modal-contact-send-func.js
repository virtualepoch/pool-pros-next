"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const fromName = formData.get("user_name");
  const fromEmail = formData.get("user_email");
  const message = formData.get("message");
  await resend.emails.send({
    from: `${fromName} <onboarding@resend.dev>`,
    reply_to: fromEmail,
    to: "cdk11235@gmail.com",
    subject: `Message from ${fromName}`,
    text: message,
  });
};
