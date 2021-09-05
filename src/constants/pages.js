import { DOMAIN } from '../utils/server'

const DOMAIN_NAME = `https://www.${DOMAIN}.com`

export const HOME_PAGE = 'home'
export const NOT_FOUND_PAGE = '404'

export const ABOUT_PAGE = 'about'
export const APPLY_PAGE = 'apply'
export const BANDS_PAGE = 'bands'
export const CONTACT_PAGE = 'contact'
export const LINKS_PAGE = 'links'

export const getPathForPage = page => (
    page === HOME_PAGE ? '/' : `/${page}`
)

export const getUrlForPage = page => {
    const
        pagePath = getPathForPage(page),
        // Include ending forward slash because Twitter warns about redirects.
        finalSlash = page === HOME_PAGE ? '' : '/'

    return `${DOMAIN_NAME}${pagePath}${finalSlash}`
}

export const getUrlForFile = filePath => (
    `${DOMAIN_NAME}${getPathForPage(filePath)}`
)
