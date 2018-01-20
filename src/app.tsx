import * as React from 'react';
import { Button } from './components/button';

class App extends React.Component<{}, {}> {
	render() {
		return (<div>
			<h1>This is the app component.</h1>
			<p>There are buttons down here:</p>
			<Button>I'm a red button</Button><br />
			<Button color="white">I have white text</Button>
		</div>);
	}
}

export { App };