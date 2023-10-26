import { useNavigate, useRouteError } from 'react-router-dom';

type CustomError = {
	message?: string;
	data?: string;
}

function Error() {
	const navigate = useNavigate();
	const error = useRouteError() as CustomError;
	
	return (
		<div>
			<h1>Что-то пошло не так 😢</h1>
			<p>{error.data || error.message}</p>
			<button onClick={() => navigate(-1)}>&larr; Go back</button>
		</div>
	);
}

export default Error;
