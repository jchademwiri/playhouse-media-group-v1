const siteUrl = 'https://www.playhousemedia.net';
import { server } from './src/config';

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/' }],
		additionalSitemaps: [
			`${server}/sitemap.xml`,
			`${server}/server-sitemap.xml`,
		],
	},
};
