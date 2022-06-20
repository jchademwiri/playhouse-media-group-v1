import { services } from '../../../data/services';

export default function serviceHandler({ query: { slug } }, res) {
	const filtered = services.filter((Service) => Service.slug === slug);

	// Service with slug exists
	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({ message: `Service with slug: ${slug} not found.` });
	}
}
