import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { TFormData, TOrder } from '../../types';
import { createOrder } from '../../services/apiRestaurant';

export async function action ({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData) as unknown as TFormData;

	const newOrder = {
		...data,
		priority: data.priority === 'on',
		cart: JSON.parse(data.cart)
	};

	const response: TOrder = await createOrder(newOrder);

	return redirect(`/order/${response.id}`);
}