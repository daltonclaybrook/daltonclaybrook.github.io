import * as React from 'react';
import { render } from 'react-dom';

const div = document.getElementById('app');

interface Props {
	children?: any;
	color: string;
}

const HelloWorld = (props: Props) => (
	<div style={{ background: props.color }}>{props.children}</div>
);

const Text = (props: Props) => (<p style={{ color: props.color }}>{props.children}</p>);

render(<HelloWorld color="blue"><Text color="white">Awesome</Text></HelloWorld>, div);