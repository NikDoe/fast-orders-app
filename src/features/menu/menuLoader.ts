import { getMenu } from '../../services/apiRestaurant';

export async function loader () {
	const data = await getMenu();
	return data;
}