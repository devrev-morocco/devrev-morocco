import md5 from 'md5';

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;

    // API keys are in the form <key>-us3.
    const DATACENTER = API_KEY.split('-')[1];

    // Send a POST request to Mailchimp.
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed'
        }),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );

    if (response.status >= 400) {
      const subscriberHash = md5(email.toLowerCase());

      const CheckUserResponse = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${subscriberHash}`,
        {
          headers: {
            Authorization: `apikey ${API_KEY}`,
            'Content-Type': 'application/json'
          },
          method: 'GET'
        }
      );

      if (CheckUserResponse.status >= 400) {
        return res.status(400).json({
          error: `There was an error subscribing to the newsletter. Shoot me an email at zack@gemography.com and I'll add you to the list.`
        });
      }

      return res.status(200).json({ error: '' });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
