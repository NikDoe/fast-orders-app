import { TCartItem } from '../../types';
import { formatCurrency } from '../../utils';

type CartItemProps = {
	item: TCartItem;
}

function CartItem({ item }: CartItemProps) {
	const { pizzaId, name, quantity, totalPrice } = item;

	console.log(`ID пиццы ${pizzaId}`);

	return (
		<li>
			<p>
				{quantity}&times; {name}
			</p>
			<div>
				<p>{formatCurrency(totalPrice)}</p>
			</div>
		</li>
	);
}

export default CartItem;
