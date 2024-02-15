const nodemailer = require("nodemailer");

async function main() {
    try {
        const email = {
            from: "marchenkodanil97@gmail.com",
            to: "marchenkodaniel97@gmail.com",
            subject: "Sendgrid test",
            html: "<h1>Hello there</h1>",
            text: "Hello there",
        };

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "b0f75c66f7b155",
                pass: "7779fa5786e56a",
            },
        });

        const response = await transport.sendMail(email);
        console.log(response);
    } catch (error) {
        console.error("Application Error", error);
    }
}

main();
