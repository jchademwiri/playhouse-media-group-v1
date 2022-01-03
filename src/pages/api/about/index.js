import { about as details } from '../../../data/about';
export default function handler(req, res) {
	res.status(200).json(details);
}
