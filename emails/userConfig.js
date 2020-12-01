module.exports = () => {
    const emailConfig = {
      apiKey: process.env.MAILGUN_API_KEY,
      domain: 'mailer.chikaonyema.com'
    };
  return emailConfig;
  };