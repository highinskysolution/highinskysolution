const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date() });
});

// Contact Inquiry Submission Route
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message, _honey } = req.body;

  // 1. Honeypot check for spam prevention
  if (_honey && _honey.trim() !== "") {
    console.warn("Spam Bot detected via honeypot field.");
    // Return success to the bot to prevent it from trying other methods
    return res.status(200).json({
      success: true,
      message: "Inquiry received successfully!"
    });
  }

  // 2. Server-side validation
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: "Name is required." });
  }
  if (!email || !email.trim()) {
    return res.status(400).json({ success: false, message: "Email is required." });
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ success: false, message: "Please provide a valid email address." });
  }

  if (phone && phone.trim() !== "") {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.trim())) {
      return res.status(400).json({ success: false, message: "Phone number must be exactly 10 digits containing numbers only." });
    }
  }

  if (!message || !message.trim()) {
    return res.status(400).json({ success: false, message: "Message content is required." });
  }

  console.log(`Processing contact form submission from: ${name} (${email})`);

  // 3. Nodemailer Configuration
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || smtpUser;

  // Fallback / Mock check if credentials are placeholders
  if (!smtpPass || smtpPass.includes("xxxx") || smtpPass === "") {
    console.warn("WARNING: SMTP credentials not configured in .env. Mocking successful submission.");
    return res.status(200).json({
      success: true,
      message: "Inquiry received successfully (Mocked: Setup SMTP in .env to deliver email)."
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // 4. Compose Admin Notification Email
    const adminMailOptions = {
      from: `"HIGH IN SKY SOLUTIONS Backend" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email.trim(),
      subject: `New Lead: ${name.trim()} - ${service || "General Inquiry"}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #17212b; max-width: 600px; border: 1px solid #dce8ed; border-radius: 8px;">
          <h2 style="color: #066670; border-bottom: 2px solid #066670; padding-bottom: 8px; margin-top: 0;">New Contact Inquiry Received</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phone ? phone.trim() : "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service Needed:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #0c8f9a;">${service || "General Inquiry"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message.trim()}</td>
            </tr>
          </table>
          <div style="margin-top: 25px; font-size: 0.8rem; color: #65717f; border-top: 1px solid #dce8ed; padding-top: 10px; text-align: center;">
            Sent automatically from HIGH IN SKY SOLUTIONS Server.
          </div>
        </div>
      `
    };

    // 5. Compose Client Auto-Responder Confirmation
    const clientMailOptions = {
      from: `"HIGH IN SKY SOLUTIONS" <${smtpUser}>`,
      to: email.trim(),
      subject: `Inquiry Received - HIGH IN SKY SOLUTIONS`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #17212b; max-width: 600px; border: 1px solid #dce8ed; border-radius: 8px; background-color: #f6fbfc;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #066670; margin: 0; font-size: 1.6rem; letter-spacing: 0.05em;">HIGH IN SKY SOLUTIONS</h2>
            <p style="color: #65717f; font-size: 0.85rem; margin-top: 5px; text-transform: uppercase; letter-spacing: 0.1em;">Secure Digital Engineering</p>
          </div>
          <p>Hello <strong>${name.trim()}</strong>,</p>
          <p>Thank you for reaching out to us. We have successfully received your inquiry regarding <strong>${service || "our services"}</strong>.</p>
          <p>Our team is reviewing your requirements, and we will get back to you with a clear, professional technical proposal or response within the next 24 business hours.</p>
          
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #066670; margin: 20px 0; border-radius: 4px; box-shadow: 0 4px 12px rgba(23,33,43,0.04);">
            <strong style="color: #066670;">Your message details:</strong>
            <p style="margin: 8px 0 0; color: #65717f; font-style: italic; white-space: pre-wrap; font-size: 0.9rem;">"${message.trim()}"</p>
          </div>
          
          <p style="margin-top: 25px;">Best regards,</p>
          <p style="margin-bottom: 0;"><strong>Gagan Ganesh Moolya</strong><br>
          <span style="font-size: 0.85rem; color: #65717f;">Founder & CEO | Lead Engineer</span><br>
          <a href="https://highinskysolutions.com" style="color: #0c8f9a; text-decoration: none; font-size: 0.85rem;">highinskysolutions.com</a></p>
        </div>
      `
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    console.log(`Success: Emails delivered for ${name}`);
    return res.status(200).json({
      success: true,
      message: "Inquiry received successfully! Check your inbox for confirmation."
    });

  } catch (error) {
    console.error("Nodemailer Email Transport Error:", error);
    return res.status(500).json({
      success: false,
      message: "System encountered an error sending email. Please try again later."
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`================================================`);
  console.log(` HIGH IN SKY SOLUTIONS Backend running on port ${PORT}`);
  console.log(` Endpoint ready: POST http://localhost:${PORT}/api/contact`);
  console.log(`================================================`);
});
