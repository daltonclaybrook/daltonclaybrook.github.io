import * as React from 'react'
import * as Showdown from 'showdown'
import * as API from '../business/api'
import { Section } from './section'

interface State {
    bioHTML: string
}

class Bio extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = { bioHTML: 'Loading...' }
    }

    render() {
        const innerHTML = { __html: this.state.bioHTML }
        return (
            <Section>
                <div dangerouslySetInnerHTML={innerHTML} />
            </Section>
        )
    }

    async componentDidMount() {
        const bioMarkdown = await API.fetchBio()
        const converter = new Showdown.Converter()
        const bioHTML = converter.makeHtml(bioMarkdown)
        this.setState({ bioHTML })
    }
}

export { Bio }
