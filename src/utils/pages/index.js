export const getMapFromPages = ({
    topLevelPage,
    pages,

}) => (
    pages.reduce((map, page, index) => {
        map[page.id] = {
            topLevelPage,
            ...page,
            ...index > 0 && {
                previousPage: pages[index - 1],
            },
            ...index < pages.length - 1 && {
                nextPage: pages[index + 1],
            },
        }

        return map
    }, {})
)

export const getLinkForPage = ({
    topLevelPage,
    id,
    date = {},
}) => {
    const {
            year,
            month,
            day,
        } = date,
        datePath = (
            year && month && day ?
                `${year}/${month}-${day}-` :
                ''
        )

    return (
        `${topLevelPage}/${datePath}${id}`
    )
}
