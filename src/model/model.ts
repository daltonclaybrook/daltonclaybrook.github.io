interface SiteInfo {
    name: string
    title: string
    location: string
    email: string
    imageURL: string
    links: Links
    skills: [Skill]
    featuredProject: Project
    latestProjects: [Project]
    otherProjects: [Project]
    buzzWords: [string]
    work: [Work]
    reviews: [Review]
}

interface Links {
    gitHub: string
    twitter: string
    stackOverflow: string
    linkedIn: string
}

interface Skill {
    name: string
    level: number
    levelDescription: string
}

interface Project {
    name: string
    link: string
    description: string
}

interface Work {
    title: string
    company: string
    description: string
    startDate: Date
    endDate?: Date
}

interface Review {
    quote: string
    name: string
    description: string
}

export { SiteInfo, Links, Skill, Project, Work, Review }
