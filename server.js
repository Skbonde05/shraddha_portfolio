const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Replace with your Gmail credentials
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "skbonde05@gmail.com",        
    pass: "oufnlanqwjgfpxae"             
  },
});

contactEmail.verify((error, success) => {
  if (error) {
    console.log("Email server not ready:", error);
  } else {
    console.log("Ready to send emails");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const fullName = `${firstName} ${lastName}`;

  const mailOptions = {
    from: email,
    to: "skbonde05@gmail.com",
    subject: "Contact Form Submission",
    html: `
      <h3>New message from your portfolio contact form:</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email send failed:", error);
      res.status(500).json({ code: 500, status: "Failed to send message" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
