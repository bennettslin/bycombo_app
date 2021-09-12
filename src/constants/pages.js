import { DOMAIN } from '../utils/server'

const DOMAIN_NAME = `https://www.${DOMAIN}.com`

export const HOME_PAGE = 'home'
export const NOT_FOUND_PAGE = '404'

export const ABOUT_PAGE = 'about'
export const APPLY_PAGE = 'apply'
export const CONTACT_PAGE = 'contact'
export const LINKS_PAGE = 'links'

const TABBED_PAGES_SET = new Set([])

export const getTopLevelPageFromPath = (path = '') => (
    path.split('/')[0]
)

export const getIsTabbedPageFromPath = path => (
    TABBED_PAGES_SET.has(getTopLevelPageFromPath(path))
)

export const getLinkFromPath = path => (
    path === HOME_PAGE ? '/' : `/${path}`
)

export const getPathForChildPage = ({
    topLevelPage,
    id,
    date: {
        year,
        month,
        day,
    } = {},
}) => [
    topLevelPage && `${topLevelPage}/`,
    year && `${year}/`,
    month && `${year}-`,
    day && `${year}-`,
    id && `${id}`,
].filter(segment => Boolean(segment)).join('')

export const getUrlFromPath = path => {
    // Include ending forward slash because Twitter warns about redirects.
    const finalSlash = path === HOME_PAGE ? '' : '/'

    return `${DOMAIN_NAME}${getLinkFromPath(path)}${finalSlash}`
}
