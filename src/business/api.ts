import { SiteInfo } from '../model/model'

const configURL = 'https://raw.githubusercontent.com/daltonclaybrook/daltonclaybrook.github.io/master/src/resources/config.json'

export async function fetchSiteConfig(): Promise<SiteInfo> {
    const response = await fetch(configURL)
    return response.json()
}
