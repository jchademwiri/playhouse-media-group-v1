import { server } from './config';

export default {
	title: `Playhouse Media Group | Web Developer`,
	description:
		'We takes pride in having worked with and advised many Business Start-Ups, Entrepreneurs, & Established Businesses Globally on their Strategic Marketing Initiatives. We welcome the opportunity to offer your Business the chance to build a successful Marketing Strategy to better dominate your market segment quickly and effectively.',
	canonical: `${server}/`,
	openGraph: {
		url: `${server}/`,
		title: `Playhouse Media Group | Web Developer`,
		description:
			'We takes pride in having worked with and advised many Business Start-Ups, Entrepreneurs, & Established Businesses Globally on their Strategic Marketing Initiatives. We welcome the opportunity to offer your Business the chance to build a successful Marketing Strategy to better dominate your market segment quickly and effectively.',
		type: 'website',
		images: [
			{
				url: `${server}/images/pmg-social.jpg`,
				width: 800,
				height: 600,
				alt: 'Playhouse Media Group',
				type: 'image/jpeg',
			},
		],
		site_name: `Playhouse Media Group | Web Developer`,
		locale: 'en-ZA',
	},
	twitter: {
		handle: '@JChademwiri',
		site: '@JChademwiri',
		cardType: 'summary_large_image',
	},
};
