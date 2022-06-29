import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillTelephoneFill, BsGithub } from 'react-icons/bs';
import { VscGithubAlt } from 'react-icons/vsc';
import { ImWhatsapp } from 'react-icons/im';
export const links = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Projects',
		link: '/projects',
	},
	{
		name: 'Services',
		link: '/services',
	},
	{
		name: 'About',
		link: '/about',
	},

	{
		name: 'Contact',
		link: '/contact',
	},
];

export const icons = [
	{
		name: 'Phone',
		link: 'tel:+27740491433',
		icon: <BsFillTelephoneFill />,
	},
	{
		name: 'WhatsApp',
		link: 'https://wa.me/+27740491433',
		icon: <ImWhatsapp />,
	},
	{
		name: 'Email',
		link: 'mailto:info@playhousemedia.net',
		icon: <AiOutlineMail />,
	},
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/playhousemedia/',
		icon: <FaFacebookF />,
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jchademwiri/',
		icon: <FaLinkedinIn />,
	},
	{
		name: 'Github',
		link: 'https://www.github.com/jchademwiri/',
		icon: <VscGithubAlt />,
	},
];
