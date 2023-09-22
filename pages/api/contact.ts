import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Data", req.body);

  const API_KEY = process.env.MAILGUN_API_KEY || "";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "";

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const { firstName, lastName, email, message } = req.body;

  const messageData = {
    from: "Contact Form <contact@michellejanay.dev>",
    to: "michelle.janay.dev@gmail.com",
    subject: `Hello, you have a new form submission from ${firstName} ${lastName}, sent from ${email}`,
    text: `${message}`,
  };

  const emailRes = await client.messages
    .create(DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err: any) => {
      console.error(err);
    });

  console.log(emailRes);

  res.status(200).json({ submitted: "true" });
}
