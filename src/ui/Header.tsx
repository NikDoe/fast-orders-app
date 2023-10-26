import { Link } from 'react-router-dom';
import SearcOrder from './SearcOrder';

function Header() {
	return (
		<header>
			<Link to='/'>Fast Orders</Link>
			<SearcOrder />
		</header>
	);
}

export default Header;
