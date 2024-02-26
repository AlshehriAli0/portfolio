"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const sender = formData.get("sender");
  const message = formData.get("message");

  if (
    !message ||
    typeof message !== "string" ||
    !sender ||
    typeof sender !== "string"
  ) {
    return {
      error: "invalid message",
      message: "Please provide a valid email and message",
    };
  }

  let data = true;

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ali0fawzish@outlook.com",
      subject: "Message from contact form",
      reply_to: sender as string,
      text: message as string,
    });
  } catch (error: string | any) {
    console.error(error);
    return {
      error: error.message || error || "Error sending email",
      message: "There was an error sending the email",
      data : false,
    };
  }

  return { data };
}
