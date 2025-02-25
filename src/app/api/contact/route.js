import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, website, mobile, message } = await req.json();

    if (!name || !email || !mobile) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    await resend.emails.send({
      from: "noreply@themarketingtribe.co",
      to: ["eva@themarketingtribe.co", "charu@themarketingtribe.co"],
      subject: "Contact Form Submission",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Company Website:</strong> ${website}</p>
             <p><strong>Mobile Number:</strong> ${mobile}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
