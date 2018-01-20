import * as React from 'react';
import { ButtonContainer } from './components/button-container';
import { FormComponent } from './components/form-component';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>This is the app component.</h1>
                <FormComponent formName="Controlled Input Example">
                    <p>
                        Changing the color of the buttons in the component below
                        should not case this text input to lose its value.
                    </p>
                    <ButtonContainer />
                </FormComponent>
            </div>
        );
    }
}

export { App };
