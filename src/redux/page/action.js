import { HOME_PAGE } from '../../constants/pages'
import { PAGE_STORE } from '../../constants/store'
import { setWindowLocationPath } from '../../utils/storage'

export const updateSelectedPagePath = ({
    selectedHash = '',
    selectedSearch = '',
    selectedPagePath = HOME_PAGE,
}) => {
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
