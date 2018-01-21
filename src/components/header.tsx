import * as React from 'react'

interface Props {
    name: string
    title: string
}

class Header extends React.Component<Props, {}> {    
    render() {
        const { name, title } = this.props
        return (
            <div>
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div>
        )
    }
}

export { Header }
