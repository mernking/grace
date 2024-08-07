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
      return new Response(
        JSON.stringify({ error: "Email already exists" }),
        { status: 400 }
      );
    }
    const newEmail = new Email({ email });
    await newEmail.save();

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
