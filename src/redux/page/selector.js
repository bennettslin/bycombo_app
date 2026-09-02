import qs from 'qs'
import { createSelector } from 'reselect'
import { getTopLevelPageFromPath } from '../../utils/pages/path'
import { getBoolFromTextValue } from '../../utils/storage'
import { PAGE_STORE } from '../../constants/store'
import { ID_LINK_KEY } from '../../constants/pages'

const mapIsIdLinkedPage = (
    { [PAGE_STORE]: { selectedSearch } },
) => getBoolFromTextValue(
    qs.parse(selectedSearch, { ignoreQueryPrefix: true })[ID_LINK_KEY],
)

const mapIsSubsequentSession = (
    { [PAGE_STORE]: { isFirstSession } },
) => !isFirstSession

export const getMapDoShowBackButton = createSelector(
    mapIsSubsequentSession,
    mapIsIdLinkedPage,
    (
        isSubsequentSession,
        isIdLinkedPage,
    ) => isSubsequentSession && isIdLinkedPage,
)

export const mapIsPointerDown = (
    { [PAGE_STORE]: { isPointerDown } },
) => isPointerDown

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
