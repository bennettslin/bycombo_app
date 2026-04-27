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

    // Search query and section id hash are no longer needed once set in state.
    setWindowLocationPath(selectedPagePath)

    return {
        type: PAGE_STORE,
        payload: {
            selectedHash,
            selectedSearch,
            selectedPagePath,
        },
    }
}
