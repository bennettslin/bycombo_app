import { PAGE_STORE } from '../../constants/store'
import { getWindow } from '../../utils/browser'
import { getPathFromWindowLocation } from '../../utils/pages/path'
import { setWindowLocationPath } from '../../utils/storage'

export const updateSelectedPagePath = () => {
    const {
            hash: selectedHash,
            search: selectedSearch,
            pathname,
        } = getWindow().location,
        selectedPagePath = getPathFromWindowLocation(pathname)

    // Search query is no longer needed once it's set in state.
    setWindowLocationPath(selectedPagePath, selectedHash)

    return {
        type: PAGE_STORE,
        payload: {
            selectedHash,
            selectedSearch,
            selectedPagePath,
        },
    }
}
