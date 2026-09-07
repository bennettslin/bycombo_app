import qs from 'qs'
import { createSelector } from 'reselect'
import { getChildPageFromPath, getTopLevelPageFromPath } from '../../utils/pages/path'
import { getBoolFromTextValue } from '../../utils/storage'
import { PAGE_STORE } from '../../constants/store'
import { ID_LINK_KEY } from '../../constants/pages'
import { getCapitalizedText } from '../../utils/format'
import { getSmartQuotedText } from '../../utils/format/smartQuote'

export const mapIsIdLinkedPage = (
    { [PAGE_STORE]: { selectedSearch } },
) => getBoolFromTextValue(
    qs.parse(selectedSearch, { ignoreQueryPrefix: true })[ID_LINK_KEY],
)

export const mapIsSubsequentSession = (
    { [PAGE_STORE]: { isFirstSession } },
) => !isFirstSession

export const mapIsPointerDown = (
    { [PAGE_STORE]: { isPointerDown } },
) => isPointerDown

export const mapSelectedPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => selectedPagePath

export const mapSelectedTopLevelPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => getTopLevelPageFromPath(selectedPagePath)

export const mapSelectedChildPagePath = (
    { [PAGE_STORE]: { selectedPagePath } },
) => getChildPageFromPath(selectedPagePath)

const getMapIsChildPage = createSelector(
    mapSelectedTopLevelPagePath,
    mapSelectedPagePath,
    (
        selectedTopLevelPagePath,
        selectedPagePath,
    ) => (
        selectedTopLevelPagePath !== selectedPagePath
    ),
)

export const getMapDoShowBackLink = createSelector(
    getMapIsChildPage,
    mapIsIdLinkedPage,
    (
        isChildPage,
        isIdLinkedPage,
    ) => (
        // Show if it's a child page like Indie's commentary or reference…
        isChildPage ||
        // … Or if it's from one top-level page to another, like Demos to Indie.
        isIdLinkedPage
    ),
)

export const getMapBackLinkText = createSelector(
    getMapIsChildPage,
    mapSelectedTopLevelPagePath,
    mapIsIdLinkedPage,
    mapIsSubsequentSession,
    (
        isChildPage,
        selectedTopLevelPagePath,
        isIdLinkedPage,
        isSubsequentSession,
    ) => {
        if (isChildPage) {
            return getSmartQuotedText(
                `${isSubsequentSession ? 'Back' : 'Go'} to "${
                    getCapitalizedText(selectedTopLevelPagePath)
                }"`,
            )
        } else if (isIdLinkedPage) {
            return `Go back`
        }
        // Technically, this will never be rendered.
        return ``
    },
)

export const getMapIsSelectedMenuPath = topLevelPagePath => createSelector(
    mapSelectedTopLevelPagePath,
    selectedTopLevelPagePath => (
        selectedTopLevelPagePath === topLevelPagePath
    ),
)
