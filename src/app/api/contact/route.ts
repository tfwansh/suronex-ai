import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, mobile, subject, message } = body

    const transporter = nodemailer.createTransport({
      host: "smtp.protonmail.ch",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.MAIL_USER}>`,
      to: "mailansh@protob.me",
      replyTo: email,
      subject: subject || "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error(err)
    return new Response("Failed to send email", { status: 500 })
  }
}

