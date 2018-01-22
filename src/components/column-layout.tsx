import * as classNames from 'classnames'
import * as React from 'react'

interface Props {
    // each child array represents a column
    columns: [JSX.Element]
}

class ColumnLayout extends React.Component<Props, {}> {
    render() {
        const { columns } = this.props
        return (
            <main>
                <div className={classNames('centered', 'horizontal-grid')}>
                    {columns.map(this.makeColumnElement)}
                </div>
            </main>
        )
    }

    // Private methods

    private makeColumnElement = (element: JSX.Element, index: number): JSX.Element => (
        <div className={classNames('grid-section', `grid-${index}`)}>
            {element}
        </div>
    )
}

export { ColumnLayout }
