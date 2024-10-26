import qs from 'qs'
import slugify from 'slugify'
import { DOMAIN_NAME, HOME_PAGE, ID_LINK_KEY, DEMOS_PAGE, TABBED_PAGES_SET } from '../../../constants/pages'

export const getTopLevelPageFromPath = (path = '') => (
    path.split('/')[0]
)

export const getChildPageFromPath = (path = '') => (
    path.split('/').reverse()[0]
)

export const getIsTabbedPath = path => (
    TABBED_PAGES_SET.has(getTopLevelPageFromPath(path))
)

export const getInternalLinkForPath = path => {
    let pathString = path

    if (path === HOME_PAGE) {
        pathString = ''
    }

    // Add query string to know it's a link to an id on an internal page.
    if (path.includes('#')) {
        const
            pathArray = pathString.split('#'),
            queryString = qs.stringify(
                { [ID_LINK_KEY]: true },
                { addQueryPrefix: true },
            )

        pathString = `${pathArray[0]}${queryString}#${pathArray[1]}`
    }

    return `/${pathString}`
}

export const getUrlFromPath = path => {
    // Include ending forward slash because Twitter warns about redirects.
    const finalSlash = (
        path === HOME_PAGE ||

        // Exclude if it's a file path.
        path.includes('.')
    ) ? '' : '/'

    return `${DOMAIN_NAME}${getInternalLinkForPath(path)}${finalSlash}`
}

export const getUrlFromPathAndLinkId = (path, linkId) => (
    `${getUrlFromPath(path)}${linkId ? `#${linkId}` : ''}`
)

export const getPathFromWindowLocation = locationPath => (
    locationPath === '/' ? HOME_PAGE : locationPath.replace('/', '')
)

export const getDemoLinkPath = ({
    year,
    band,
    project,
}) => [
    DEMOS_PAGE,
    year,
    slugify(
        band,
        {
            lower: true,
            strict: true,
        },
    ),
    slugify(
        project,
        {
            lower: true,
            strict: true,
        },
    ),
].join('/')
