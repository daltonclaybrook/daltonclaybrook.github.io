import { SiteInfo } from '../model/model'

const configURL = 'https://raw.githubusercontent.com/daltonclaybrook/daltonclaybrook.github.io/develop/resources/config.json'
const bioURL = 'https://raw.githubusercontent.com/daltonclaybrook/daltonclaybrook.github.io/master/src/resources/bio.md'

export async function fetchSiteInfo(): Promise<SiteInfo> {
    const response = await fetch(configURL)
    return response.json()
}

export async function fetchBio(): Promise<string> {
    const response = await fetch(bioURL)
    return response.text()
}
