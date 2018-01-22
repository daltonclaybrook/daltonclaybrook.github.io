import * as classNames from 'classnames'
import * as React from 'react'

interface Props extends React.HTMLProps<any> {
    right?: boolean
}

const Section = ({ children, right }: Props) => (
    <section className={classNames('section', { right })}>
        {children}
    </section>
)

export { Section }
