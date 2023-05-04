import { createSelector } from 'reselect'
import { getTopLevelPageFromPath } from '../../utils/pages/path'
import { PAGE_STORE } from '../../constants/store'

export const mapIsHashedPage = (
    { [PAGE_STORE]: { selectedHash } },
) => Boolean(selectedHash)

export const mapSelectedPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => selectedPagePath

export const getMapIsSelectedPagePath = pagePath => (
    { [PAGE_STORE]: { selectedPagePath } },
) => pagePath === selectedPagePath

export const getMapIsSelectedMenuPath = topLevelPage => createSelector(
    mapSelectedPagePath,
    selectedPagePath => (
        getTopLevelPageFromPath(selectedPagePath) === topLevelPage
    ),
)
