import removeMarkdown from 'remove-markdown'
import { MONTH_NAMES } from '../../../constants/dates'

export const convertMarkdownToText = markdown => (
    removeMarkdown(markdown)
)

export const getLinkId = children => (
    (Array.isArray(children) ? children[0] : children)
        .toLowerCase().split(/[^a-z0-9]/)
        .filter(text => Boolean(text))
        .join('-')
)

export const getMarkdownLinkFromId = id => (
    `[${id}](#${getLinkId(id)})${'  '}`
)

export const getMarkdownLinkFromDate = ({ map, root, year, month, day }) => {
    const { title, path } = map[year][month][day]

    return (
        `[${title}](/${root}/${year}/${month}-${day}-${path})${'  '}`
    )
}

export const getMarkdownHeaderFromDate = ({ year, month, day }) => (
    `##### ${day} ${MONTH_NAMES[month]} ${year}`
)
