import * as React from 'react'

interface Props extends React.HTMLProps<any> {
    right?: boolean
}

const Section = ({ children }: Props) => (
    <section>
        {children}
    </section>
)

export { Section }
