import * as React from 'react';
import { ButtonContainer } from './components/button-container';
import { FormComponent } from './components/form-component';
import { Header } from './components/header';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Header title="Ball Fondlers" />
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
