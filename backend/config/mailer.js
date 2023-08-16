const nodemailer = require("nodemailer");

exports.senMail = (to, subject, htmlConten) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.gmail.com",
    service: "gmail",
    port: 568,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "talaprox1@gmail.com",
      pass: "slidwxaunxmedirl",
    },
  });

  var option = {
    from: "sender@server.com",
    to: to,
    subject: subject,
    text: "Plaintext version of the message",
    html: htmlConten,
  };
  return transporter.sendMail(option);
};
