import * as React from 'react';

type HeaderProps = {
	title: string;
};
function Header(props: HeaderProps) {
	return <h1 className="primary-header">{props.title}</h1>;
}

export default Header;
