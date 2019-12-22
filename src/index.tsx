import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './header';
import CustomDate from './custom-date';
import FrutiLoop from './fruit-loops';

let fruit: string[] = ['red', 'Green', 'Blue', 'Yellow'];

ReactDOM.render(
	<div>
		<Header title="Hello World!" />
		<p>This is a sample page React application.</p>
		<CustomDate />
		<FrutiLoop fruit={fruit} />
	</div>,
	document.querySelector('#root')
);
