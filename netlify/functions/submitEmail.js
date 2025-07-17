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

    // ✅ Send confirmation email
    const emailResponse = await resend.emails.send({
      from: 'Referral Boost <onboarding@resend.dev>', // or your verified domain
      to: email,
      subject: 'Thank you for signing up!',
      html: `<strong>You're on the list!</strong><br>Thanks for joining our early access launch.`,
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
