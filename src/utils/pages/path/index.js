import qs from 'qs'
import slugify from 'slugify'
import { DOMAIN_NAME, HOME_PAGE, ID_LINK_KEY, DEMOS_PAGE } from '../../../constants/pages'

export const getTopLevelPageFromPath = (path = '') => (
    path.split('/').shift()
)

export const getChildPageFromPath = (path = '') => (
    path.split('/').pop()
)

export const getPathParameters = ({ path, isPointerDown }) => {
    const
        pathArray = (
            path === HOME_PAGE ? '' : path
        ).split('#'),

        /**
         * Add query string to know it's a link from text on an internal page.
         * My approach is to include '#' even if no section id is specified.
         */
        search = isPointerDown && path.includes('#') ? qs.stringify(
            { [ID_LINK_KEY]: true },
            { addQueryPrefix: true },
        ) : '',

        // Keep '#' only if section id is specified.
        hash = pathArray.length > 1 && pathArray[1] ? `#${pathArray[1]}` : ''

    return {
        pagePath: `/${pathArray[0]}`,
        search,
        hash,
    }
}

export const getInternalLinkForPath = ({ path, isPointerDown = false }) => {
    const {
        pagePath,
        search,
        hash,
    } = getPathParameters({ path, isPointerDown })

    return `${pagePath}${search}${hash}`
}

export const getUrlFromPath = path => (
    `${DOMAIN_NAME}${getInternalLinkForPath({ path })}`
)

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
