import formData from "form-data";
import Mailgun from "mailgun.js";
import "dotenv/config";

const {MAILGUN_API_KEY, MAILGUN_DOMAIN} = process.env;

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY
});

/*
const payload = {
    to: ["jager85994@dwakm.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
    html: "<h1>Testing some Mailgun awesomness!</h1>",
  };
*/

const sendEmail = payload => {
    const email = {...payload, from: `Excited User <mailgun@${MAILGUN_DOMAIN}>`};
   return  mg.messages.create(MAILGUN_DOMAIN, email);
}

export default sendEmail;

