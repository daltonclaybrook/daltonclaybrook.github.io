import * as React from 'react'
import { Button } from './button'

interface Props {
    formName: string
}

interface State {
    submittedTextValue: string
    textValue: string
}

class FormComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        // set the initial text value
        this.state = {
            submittedTextValue: '',
            textValue: '',
        }
    }

    render() {
        const { children, formName } = this.props
        const { textValue, submittedTextValue } = this.state
        return (
            <fieldset>
                <legend>{formName}</legend>
                <form onSubmit={this.handleSubmit}>
                    <input value={textValue} onChange={this.handleChange} />
                    <br />
                    <br />
                    <Button type="submit">Submit this form</Button>
                    <br />
                    <br />

                    {/* show a label if the form was submitted with a vlue in the box */}
                    {submittedTextValue && (
                        <strong>{submittedTextValue}</strong>
                    )}
                </form>
                <fieldset>
                    <legend>Children go here</legend>
                    {children}
                </fieldset>
            </fieldset>
        )
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ textValue: e.target.value })
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault() // keep the page from refreshing
        const { textValue } = this.state // get the value from the text box
        this.setState({ submittedTextValue: textValue }) // apply that to the submitted value
    }
}

export { FormComponent }
