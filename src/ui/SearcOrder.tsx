import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearcOrder() {
	const [query, setQuery] = useState<string>('');
	const navigate = useNavigate();

	function handleChange (event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;
		setQuery(value);
	}

	function handleSubmit (event: FormEvent) {
		event.preventDefault();

		if(!query) return;
        
		navigate(`/order/${query}`);
		setQuery('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				type='text' 
				placeholder='поиск заказа #...'
				value={query}
				onChange={handleChange}
			/>
		</form>
	);
}

export default SearcOrder;
