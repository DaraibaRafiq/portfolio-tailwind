import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { username, email, phone, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `${username} <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${username}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<h2>New Message</h2>
             <p><strong>Name:</strong> ${username}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    })
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: unknown) {
  console.error('Mail error:', error)

  // Type guard: check if error is actually an Error object
  if (error instanceof Error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Fallback in case error is not an instance of Error
  return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 })
}

  }
