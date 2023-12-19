import removeMarkdown from 'remove-markdown'
import slugify from 'slugify'
import { getPagePathFromConfig } from '../../pages/config'

export const convertMarkdownToText = markdown => (
    removeMarkdown(markdown)
)

const joinArrayOfStrings = stringArray => (
    stringArray.map(entry => {
        if (typeof entry === 'string') {
            return entry
        }

        const entryObject = entry?.props?.children

        return Array.isArray(entryObject) ?
            joinArrayOfStrings(entryObject) :
            entryObject
    })
        .join('')
)

const removeListItemNumber = text => (
    typeof text === 'string' && !isNaN(text.charAt(0)) ?
        text.substring(text.indexOf('. ') + 2) :
        text
)

export const getLinkId = children => (
    slugify(
        removeListItemNumber(
            joinArrayOfStrings(
                Array.isArray(children) ?
                    children :
                    [children],
            ),
        ),
        {
            lower: true,
            strict: true,
        },
    )
)

export const getMarkdownLinkFromText = id => (
    `[${id}](#${getLinkId(id)})${'  '}`
)

const getMarkdownLinksForPages = ({
    topLevelPage,
    pages,
}) => (
    pages.map(page => {
        const { title } = page

        return (
            `[${title}](/${getPagePathFromConfig({ topLevelPage, ...page })})${'  '}`
        )
    }).join(`\n`)
)

export const getMarkdownLinksForRootPage = ({
    topLevelPage,
    pagesList,
}) => (
    pagesList.map(({ heading, pages }) => (
        `### ${heading}${'\n'}` +
        getMarkdownLinksForPages({
            topLevelPage,
            pages,
        })
    ))
)
