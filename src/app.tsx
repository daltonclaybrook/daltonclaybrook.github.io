import * as classNames from 'classnames'
import * as React from 'react'
import './app.css'
import * as API from './business/api'
import { Bio } from './components/bio'
import { Contact } from './components/contact'
import { FeaturedProjects } from './components/featured-projects'
import { Footer } from './components/footer'
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
        <div className={classNames('container')}>
            <Header {...siteInfo} />
            <main>
                <div className={classNames('centered', 'horizontal-grid')}>
                    <div className={classNames('grid-section', 'grid-left')}>
                        <Bio />
                        <FeaturedProjects {...siteInfo} />
                    </div>
                    <div className={classNames('grid-section', 'grid-right')}>
                        <Contact location={siteInfo.location} email={siteInfo.email} gitHubURL={siteInfo.links.gitHub} />
                    </div>
                </div>
            </main>
            <Footer title="Footer title..." />
        </div>
    )
}

export { App }
