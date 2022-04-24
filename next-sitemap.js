const siteUrl = 'https://www.playhousemedia.net';

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/' }],
		additionalSitemaps: [
			`${siteUrl}/sitemap.xml`,
			`${siteUrl}/server-sitemap.xml`,
		],
	},
};
