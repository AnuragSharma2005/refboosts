import { createClient } from '@supabase/supabase-js';
console.log("Supabase loaded!", createClient);

// Initialize Supabase client with anon key
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

exports.handler = async (event) => {
  // Only accept POST requests
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
