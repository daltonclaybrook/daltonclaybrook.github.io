import * as classnames from 'classnames'
import * as React from 'react'

interface Props extends React.HTMLProps<any> {
    right?: boolean
}

const Section = ({ children, right }: Props) => (
    <section className={classnames('section', { right })}>
        {children}
    </section>
)

export { Section }
