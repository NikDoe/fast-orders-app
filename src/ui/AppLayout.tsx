import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Spinner from './Spinner';

function AppLayout() {
	const { state } = useNavigation();
	const isLoading = state === 'loading';

	return (
		<div className='layout'>
			{isLoading && <Spinner />}
			<Header />
			<main>
				<Outlet />
			</main>
			<CartOverview />
		</div>
	);
}

export default AppLayout;
