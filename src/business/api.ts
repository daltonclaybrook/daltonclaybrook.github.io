import { SiteInfo } from '../model/model'

const configURL = process.env.CONFIG_URL || ''
const bioURL = process.env.BIO_URL || ''

export async function fetchSiteInfo(): Promise<SiteInfo> {
    const response = await fetch(configURL)
    return response.json()
}

export async function fetchBio(): Promise<string> {
    const response = await fetch(bioURL)
    return response.text()
}
