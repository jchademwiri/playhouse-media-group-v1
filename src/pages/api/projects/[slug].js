import { projects } from '../../../data/projects.js';

export default function personHandler({ query: { slug } }, res) {
	const filtered = projects.filter((project) => project.slug === slug);

	// User with slug exists
	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({ message: `Project with slug: ${slug} not found.` });
	}
}
