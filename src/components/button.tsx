import * as React from 'react';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	color?: string;
}

const cssStyles: React.CSSProperties = {
	background: 'red',
	border: 'none',
};

const Button = ({ children, color, ...rest }: Props) => (<button style={{ ...cssStyles, ...{ color } }} {...rest}>{children}</button>);
export { Button };