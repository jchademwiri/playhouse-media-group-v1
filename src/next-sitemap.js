// const siteUrl = 'https://www.playhousemedia.net';
import { server } from './config';

module.exports = {
	server,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/' }],
		additionalSitemaps: [
			`${server}/sitemap.xml`,
			`${server}/server-sitemap.xml`,
		],
	},
};
