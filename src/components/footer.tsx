import * as classNames from 'classnames'
import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
    title: string
}

const Footer = ({ title, ...rest }: Props) => (
    <footer className="footer" {...rest}>
        <h3>{title}</h3>
    </footer>
)

export { Footer }
