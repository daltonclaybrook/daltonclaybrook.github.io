import * as React from 'react'
import * as API from './business/api'
import { Header } from './components/header'
import { SiteInfo } from './model/model'

interface State {
    isLoaded: boolean
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            isLoaded: true
        }
    }

    render() {
        if (!this.state.isLoaded) {
            return this.renderLoading()
        } else {
            return this.renderLoaded()
        }
    }

    async componentDidMount() {
        const config = await API.fetchSiteConfig()
        
    }

    // Private render functions

    private renderLoading = () => (
        <Header title="Loading..." />
    )

    private renderLoaded = () => (
        <Header title="Loaded!" />
    )
}

export { App }
