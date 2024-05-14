const HREF_YEARLINGS_BOBTAIL = 'https://yearlingsbobtail.com'
const HREF_BOBTAIL_YEARLINGS = 'https://bobtailyearlings.com'

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

export const getFinalHref = href => {
    // In runtime builds, use localhost for links to my own projects.
    if (IS_RUNTIME) {

        if (href.includes(HREF_YEARLINGS_BOBTAIL)) {
            return href.replace(HREF_YEARLINGS_BOBTAIL, `${LOCALHOST}1112`)

        } else if (href.includes(HREF_BOBTAIL_YEARLINGS)) {
            return href.replace(HREF_BOBTAIL_YEARLINGS, `${LOCALHOST}1113`)
        }
    }

    return href
}
