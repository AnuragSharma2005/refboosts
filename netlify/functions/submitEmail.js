const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body || '{}');

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Valid email is required' }),
      };
    }

    // Try inserting the email
    const { data, error } = await supabase
      .from('early_signups')
      .insert([{ email }]);

    // If email already exists (Postgres unique constraint error)
    if (error && error.code === '23505') {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Thanks, you have already added your email ID!' }),
      };
    }

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to insert email: ' + error.message }),
      };
    }

    // ✅ Send confirmation email with formal, emotional message
    const emailResponse = await resend.emails.send({
      from: 'Referral Boost <onboarding@resend.dev>', // Replace with your verified domain address
      to: email,
      subject: "You're officially on the waitlist for Referral Boost 🚀",
      html: `
        <h2>Thank you for signing up!</h2>
        <p>
          We're thrilled to welcome you to <strong>Referral Boost</strong>.
        </p>
        <p>
          Your interest means a lot to us. You're now officially on our early access list, and we're working hard behind the scenes to bring you something truly valuable.
        </p>
        <p>
          Our team will reach out to you personally very soon with more updates and early access details. You're not just a subscriber — you're a part of our journey from day one, and we couldn't be more grateful.
        </p>
        <p>
          If you have any questions or suggestions in the meantime, feel free to reply to this email.
        </p>
        <br>
        <p>Warm regards,</p>
        <p><strong>The Referral Boost Team</strong></p>
      `
    });

    if (emailResponse.error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Email not sent: ' + emailResponse.error.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email submitted and confirmation sent successfully!', data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error: ' + err.message }),
    };
  }
};
