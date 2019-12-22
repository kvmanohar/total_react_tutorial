import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './header';
import CustomDate from './custom-date';

ReactDOM.render(
	<div>
		<Header title="Hello World!" />
		<p>This is a sample page React application.</p>
		<CustomDate />
	</div>,
	document.querySelector('#root')
);
