import {
    BOBTAIL_BLOG_PATH,
    BOBTAIL_DOMINOES_PATH,
    BOBTAIL_METHOD_PATH,
    BOBTAIL_SUBSTACK_PATH,
    BOBTAIL_YEARLINGS_PATH,
    COMMENTARY_PATH,
    HIGHLIGHTS_PATH,
    YEARLINGS_BOBTAIL_PATH,
} from '../../constants/website'

const LOCALHOST = 'http://localhost:'

export const getInternalLink = ({ href = '', pagePath }) => {
    if (pagePath) {
        return pagePath
    }
    // Markdown will return page link beginning with forward slash.
    if (href[0] === '/') {
        return href.substring(1)
    }

    return null
}

export const getFinalHref = (href = '') => {
    // In runtime builds, use localhost for links to my own projects.
    if (IS_RUNTIME) {

        if (href.startsWith(YEARLINGS_BOBTAIL_PATH)) {
            return href.replace(YEARLINGS_BOBTAIL_PATH, `${LOCALHOST}1112`)
        }
    }

    return href
}

export const getIsCommentaryLink = (href = '') => (
    href.startsWith(COMMENTARY_PATH)
)

export const getIsHighlightsLink = (href = '') => (
    href.startsWith(HIGHLIGHTS_PATH)
)

export const getIsBobtailLink = (href = '') => (
    href.startsWith(BOBTAIL_BLOG_PATH) ||
    href.startsWith(BOBTAIL_DOMINOES_PATH) ||
    href.startsWith(BOBTAIL_METHOD_PATH) ||
    href.startsWith(BOBTAIL_SUBSTACK_PATH) ||
    href.startsWith(BOBTAIL_YEARLINGS_PATH) ||
    href.startsWith(YEARLINGS_BOBTAIL_PATH)
)
