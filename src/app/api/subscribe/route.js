import connectToDatabase from "../../../../lib/mongoose";
import Email from "../../../../models/email";

export async function POST(req) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return new Response(JSON.stringify({ error: "Invalid email" }), {
      status: 400,
    });
  }

  try {
    await connectToDatabase();
    console.log("Connected to MongoDB");
    if (await Email.findOne({ email })) {
      return new Response(JSON.stringify({ error: "Email already exists" }), {
        status: 400,
      });
    }
    const newEmail = new Email({ email });
    await newEmail.save();

    let mailOptionsToSender = {
      from: '"Boundless Bolt" <boundlessbolt@gmail.com>', // Sender address
      to: email, // Sender's email address
      subject: "You have subscribed to our newsletter ( Boundless Bolt )", // Subject line
      text: `

Thank you for subscribing to our newsletter. We will keep you up-to-date with the latest news.
Best regards,
Boundless Bolt
`, // Plain text body
    };

    mailOptionsToSender();

    return new Response(
      JSON.stringify({ message: "Email subscribed successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to subscribe email" }),
      { status: 500 }
    );
  }
}
