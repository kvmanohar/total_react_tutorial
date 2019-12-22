import * as React from 'react';

type HeaderProps = {
	title: string;
};
function Header(props: HeaderProps) {
	return <h1 className="primary-header">{props.title}</h1>;
}

Header.displayName = 'Header';
export default Header;
