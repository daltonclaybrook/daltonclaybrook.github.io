import * as React from 'react'
import * as API from './business/api'
import { Bio } from './components/bio'
import { FeaturedProjects } from './components/featured-projects'
import { Header } from './components/header'
import { SiteInfo } from './model/model'

interface State {
    siteInfo?: SiteInfo
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {}
    }

    render() {
        if (this.state.siteInfo) {
            return this.renderLoaded(this.state.siteInfo)
        } else {
            return this.renderLoading()
        }
    }

    async componentDidMount() {
        const info = await API.fetchSiteInfo()
        this.setState({ siteInfo: info })
    }

    // Private render functions

    private renderLoading = () => (
        <>Loading...</>
    )

    private renderLoaded = (siteInfo: SiteInfo) => (
        <>
            <Header {...siteInfo} />
            <main>
                <Bio />
                <FeaturedProjects {...siteInfo} />
            </main>
        </>
    )
}

export { App }
