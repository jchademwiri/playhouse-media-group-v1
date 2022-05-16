const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
	const body = JSON.parse(req.body);

	const message = `
	Name: ${body.name}\r\n
	Email: ${body.email}\r\n
	Message: ${body.message}
`;

	const msg = {
		to: 'info@playhousemedia.net',
		from: 'hello@playhousemedia.net',
		subject: 'New Message from Playhouse Media Group',
		text: message,
		html: message.replace(/\n/g, '<br />'),
	};
	mail.send(msg);

	res.status(200).json({ name: 'ok' });
}
