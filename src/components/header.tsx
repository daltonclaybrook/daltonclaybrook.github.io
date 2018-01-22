import * as classNames from 'classnames'
import * as React from 'react'

interface Props {
    name: string
    title: string
}

class Header extends React.Component<Props, {}> {    
    render() {
        const { name, title } = this.props
        return (
            <header className={classNames('header')}>
                <h1>{name}</h1>
                <h2>{title}</h2>
            </header>
        )
    }
}

export { Header }
