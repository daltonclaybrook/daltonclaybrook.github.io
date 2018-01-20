import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './app';

// Create the div to bootstrap to and add it to the DOM
const div = document.createElement('div');
document.body.appendChild(div);


render(<AppContainer><App /></AppContainer>, div);

if ((module as any).hot) {
	(module as any).hot.accept('./app', () => {
		const AppComponent = require('./app').App;
		render(
			<AppContainer>
				<AppComponent />
			</AppContainer>,
			div,
		);
	});
}