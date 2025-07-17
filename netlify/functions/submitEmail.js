const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

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

    const { data, error } = await supabase
      .from('early_signups')
      .insert([{ email }]);

    if (error) {
      if (error.code === '23505') {
        // Duplicate email (unique constraint violation)
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Thanks, you have already added your email ID!' }),
        };
      }

      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to insert email: ' + error.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email submitted successfully', data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error: ' + err.message }),
    };
  }
};
