// backend/server.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

// Endpoint to handle subscription
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  try {
    const { data, error } = await supabase
      .from('early_signups')
      .insert([{ email }]);

    if (error && error.code === '23505') {
      return res.status(200).json({ message: 'Thanks, you already signed up!' });
    }

    if (error) {
      return res.status(500).json({ error: 'Failed to insert email: ' + error.message });
    }

    const emailResponse = await resend.emails.send({
      from: 'Referral Boost <onboarding@resend.dev>',
      to: email,
      subject: "You're officially on the waitlist for Referral Boost 🚀",
      html: `
        <h2>Thank you for signing up!</h2>
        <p>
          We're thrilled to welcome you to <strong>Referral Boost</strong>.
        </p>
        <p>
          You’re now officially on our early access list. Stay tuned!
        </p>
        <p>Warm regards,<br><strong>The Referral Boost Team</strong></p>
      `
    });

    if (emailResponse.error) {
      return res.status(500).json({ error: 'Email not sent: ' + emailResponse.error.message });
    }

    return res.status(200).json({ message: 'Email submitted and confirmation sent successfully!', data });
  } catch (err) {
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



