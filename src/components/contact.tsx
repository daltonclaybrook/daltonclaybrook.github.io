import * as React from 'react'
import { Section } from './section'

interface Props {
    location: string
    email: string
    gitHubURL: string
}

class Contact extends React.Component<Props, {}> {
    render() {
        const { location, email, gitHubURL } = this.props
        return (
            <Section right>
                <ul>
                    <li>{location}</li>
                    <li><a href={`mailto:${email}`}>{email}</a></li>
                    <li><a href={gitHubURL}>{gitHubURL.substring(8)}</a></li>
                </ul>
            </Section>
        )
    }
}

export { Contact }
