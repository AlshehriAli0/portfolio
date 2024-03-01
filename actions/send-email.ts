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
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "ali0alshehri@outlook.com",
      subject: "Message from contact form",
      reply_to: sender as string,
      text: `Message: ${message as string}. Sent from: ${sender as string}`,
      
    });
  } catch (error: string | any) {
    console.error(error);
    return {
      error: error.message || error || "Error sending email",
      message: "There was an error sending the email",
      data: false,
    };
  }

  try {
    await resend.emails.send({
      from: "Contact@alialshehri.works",
      to: sender as string,
      subject: "Message received!",
      text: "Thank's for contacting me! Your message has been received. I will get back to you as soon as possible!",
    });
  } catch (error: string | any) {
    console.error(error);
    return {
      error: error.message || error || "Error sending email",
      message: "There was an error sending the email",
      data: false,
    };
  }

  return { data };
}
