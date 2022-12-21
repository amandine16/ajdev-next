export default function Contact(req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    console.log('contact', req.body)
    console.log('contact', process.env.MY_GMAIL)

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.MY_GMAIL,
            pass: process.env.MY_GMAIL_PASSWORD,
        },
    });
    const mailOptions = {
        from: req.body.email,
        to: "ajdev17000@gmail.com",
        subject: "demande de contact",
        text: `Message envoyé par ${req.body.email} : ${req.body.message}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.status(200).json({ message: "Email sent: " + info.response });
        }
    });
}