const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'nluka93@hotmail.com',
        subject:'This for joining',
        text: `hellllooooooooooo ${name} . Let me know about the app.`
    })
}
const sendCancelationEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'nluka93@hotmail.com',
        subject: 'canceletion :(',
        text: `Goodbye ${name}. Is there anything we could do to keep you as a customer? `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}