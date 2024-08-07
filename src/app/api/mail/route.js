import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";


export async function GET(req, res) {
  return Response.json({ message: "leave the mailer alone" });
}

// POST route for sending email

export async function POST(req, res) {
  const { name, budget, company, email, phone, message } = await req.json();

  // Create a unique identifier
  const uniqueId = uuidv4();

  // Create a transporter object using Gmail SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "boundlessbolt@gmail.com", // Replace with your Gmail address
      pass: "hjep ktwk oquj ofof", // Replace with your Gmail password or app-specific password
    },
  });

  // Email options for the recipient
  let mailOptionsToRecipient = {
    from: '"Boundless Bolt" <boundlessbolt@gmail.com>', // Sender address
    to: "boundlessbolt@gmail.com, davtekdon@gmail.com, bentleydeclan20@gmail.com", // Replace with your recipient's email address
    subject: `Boundless Bolt New Contact Form Submission ${uniqueId}`, // Subject line
    text: `
      Name: ${name}
      Budget: ${budget}
      Company: ${company}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `, // Plain text body
  };

  // Email options for the sender (confirmation email)
  let mailOptionsToSender = {
    from: '"Boundless Bolt" <davtekdon@gmail.com>', // Sender address
    to: email, // Sender's email address
    subject: "Boundless bolt has received your message", // Subject line
    text: `Dear ${name},

Thank you for contacting us. We have received your message and will get back to you as soon as possible.

Here is a copy of your message:
-----------------------------------------
Name: ${name}
Budget: ${budget}
Company: ${company}
Email: ${email}
Phone: ${phone}
Message: ${message}
-----------------------------------------

Best regards,
Boundless Bolt
`, // Plain text body
  };

  try {
    // Send email to the recipient
    await transporter.sendMail(mailOptionsToRecipient);
    // Send confirmation email to the sender
    await transporter.sendMail(mailOptionsToSender);
    return Response.json({ message: "Emails sent successfully", status: 200 });
  } catch (error) {
    return Response.json({
      message: "Failed to send emails",
      status: 500,
      error: error.message,
    });
  }
}
