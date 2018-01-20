import * as React from 'react'

interface Props {
    title: string
}

class Header extends React.Component<Props, {}> {    
    render() {
        const { title } = this.props
        return (
            <h1>
                {title.toUpperCase()}
            </h1>
        )
    }
}

export { Header }
