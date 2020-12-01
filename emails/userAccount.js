const emailConfig = require('./userConfig')();
const mailgun = require('mailgun-js')(emailConfig);
exports.sendEmail = (email, firstName) =>
  new Promise((resolve, reject) => {
    const data = {
      from: 'chika.onyema01@gmail.com',
      to: email,
      subject: 'Chika',
      text: ` Hello ${firstName}, you've reached out to Chika Onyema.`
    };

    mailgun.messages().send(data, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  }).then(() => {
      console.log('message sent')
  }).catch((e) => {
      console.log(e)
  });