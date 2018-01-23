import * as React from 'react'
import { Project } from '../model/model'
import { Section } from './section'

interface Props {
    featuredProject: Project
    latestProjects: [Project]
}

class FeaturedProjects extends React.Component<Props, {}> {
    render() {
        const { featuredProject, latestProjects } = this.props
        return (
            <Section>
                {this.renderProject(featuredProject, 0)}
                <hr/>
                {latestProjects.map(this.renderProject)}
            </Section>
        )
    }

    // Private helpers

    private renderProject = (project: Project, index: number) => (
        <React.Fragment key={index}>
            <h3>
                <a href={project.link} target="blank">{project.name}</a>
            </h3>
            <p>{project.description}</p>
        </React.Fragment>
    )
}

export { FeaturedProjects }
