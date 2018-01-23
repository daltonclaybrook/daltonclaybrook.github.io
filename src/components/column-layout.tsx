import * as classNames from 'classnames'
import * as React from 'react'

class ColumnLayout extends React.Component<{}, {}> {
    render() {
        const { children } = this.props
        const columns = React.Children.map(children, this.makeColumnElement)
        return (
            <main>
                <div className={classNames('centered', 'horizontal-grid')}>
                    {columns}
                </div>
            </main>
        )
    }

    // Private methods

    private makeColumnElement = (node: React.ReactChild, index: number) => (
        <div className={classNames('grid-section', `grid-${index}`)}>
            {node}
        </div>
    )
}

export { ColumnLayout }
