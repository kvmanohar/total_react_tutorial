import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './header';

ReactDOM.render(
	<div>
		<Header title="Hello Props!" />
		<p>This is a sample page React application.</p>
	</div>,
	document.querySelector('#root')
);
