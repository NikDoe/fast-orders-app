import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { TCreateOrderErrors, TFormData, TOrder } from '../../types';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
	/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
		str
	);

export async function action ({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData) as unknown as TFormData;

	const newOrder = {
		...data,
		priority: data.priority === 'on',
		cart: JSON.parse(data.cart)
	};

	const errors: TCreateOrderErrors = {};

	if(!isValidPhone(newOrder.phone)) 
		errors.phone = 'Введенный номер не корректен';

	if(Object.keys(errors).length > 0) {
		return errors;
	}

	const response: TOrder = await createOrder(newOrder);

	return redirect(`/order/${response.id}`);
}