import { LoaderFunctionArgs } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';

export async function loader ({ params }: LoaderFunctionArgs) {
	if(!params.orderId) return null;

	const order = await getOrder(params.orderId);
	return order;
}