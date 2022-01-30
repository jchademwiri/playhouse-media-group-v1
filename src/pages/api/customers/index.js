import { customers } from '../../../data/customers';

export default function handler(req, res) {
	res.status(200).json(customers);
}
