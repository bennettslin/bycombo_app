import { getTruncatedText } from '../../utils/format'
import {
    getUrlForPage,
    getUrlForFile,
    HOME_PAGE,
} from '../../constants/pages'

const capitalise = str => (
    str[0].toUpperCase() + str.substring(1)
)

export const getMetaTitle = ({
    page,
    title,
}) => (
    `${page === HOME_PAGE ? '' : `${title || capitalise(page)} | `}BYCombo`
)

export const getMetaDescription = description => (
    description ?
        getTruncatedText(description) :
        'Website for BYCombo.'
)

const getDefaultConfig = description => ({
    'description': getMetaDescription(description),
})

const getFacebookConfig = ({
    page,
    description,
    title,
}) => ({
    'og:url': getUrlForPage(page),
    'og:type': 'website',
    'og:title': getMetaTitle({
        page,
        title,
    }),
    'og:description': getMetaDescription(description),
    'og:image': getUrlForFile(`share/image/facebook/byCombo.png`),
})

const getTwitterConfig = ({
    page,
    description,
    title,
}) => ({
    'twitter:card': 'summary',
    'twitter:site': '@BeWhyCombo',
    'twitter:title': getMetaTitle({
        page,
        title,
    }),
    'twitter:description': getMetaDescription(description),
    'twitter:image':
        getUrlForFile(`share/image/twitter/byCombo.png`),
})

const spreadHelmetConfig = ({ config, nameKey }) => (
    Object.keys(config).map(key => ({
        [nameKey]: key,
        content: config[key],
    }))
)

export const getMetaTags = ({
    page,
    description,
    title,
}) => ([
    ...spreadHelmetConfig({
        config: {
            ...getDefaultConfig(description),
            ...getTwitterConfig({
                page,
                description,
                title,
            }),
        },
        nameKey: 'name',
    }),
    ...spreadHelmetConfig({
        config: getFacebookConfig({
            page,
            description,
            title,
        }),
        nameKey: 'property',
    }),
])
