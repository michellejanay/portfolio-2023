import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { fullName, email, subject, message } = req.body;
      const msg: {} = {
        to: process.env.TO,
        from: process.env.FROM,
        email,
        subject: `${fullName} sent you a message: ${subject}`,
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
  <body>
  <div>
    <p>${message}</p>
  </div>
  </body>
</html>
        `,
      };

      await sendgrid.send(msg);
      res.status(200).json({ message: `Email sent` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: `Error sending message` });
    }
  } else {
    res.status(405).json({ message: "Not allowed" });
  }
};
