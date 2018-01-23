import * as classNames from 'classnames'
import * as React from 'react'
import './app.css'
import * as API from './business/api'
import { Bio } from './components/bio'
import { ColumnLayout } from './components/column-layout'
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
            <ColumnLayout>
                {this.makeLeftColumnElement(siteInfo)}
                {this.makeRightColumnElement(siteInfo)}
            </ColumnLayout>
            <Footer title="Footer title..." />
        </div>
    )

    // Helpers

    private makeLeftColumnElement = (siteInfo: SiteInfo) => (
        <>
            <Bio />
            <FeaturedProjects {...siteInfo} />
        </>
    )

    private makeRightColumnElement = (siteInfo: SiteInfo) => (
        <>
            <Contact location={siteInfo.location} email={siteInfo.email} gitHubURL={siteInfo.links.gitHub} />
        </>
    )
}

export { App }
