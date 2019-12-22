import * as React from 'react';

function CustomDate() {
	const [date, setDate] = React.useState('');

	let getDate = () => {
		setDate(new Date().toDateString());
	};

	return (
		<div>
			<p>{date}</p>
			<button onClick={getDate}>Get the date</button>
		</div>
	);
}

export default CustomDate;
