import { PAGE_STORE } from '../../constants/store'
import { getPageDefaults } from './default'

export const getPageReducer = ({
    initialHash,
    initialPage,

}) => (
    state = getPageDefaults({ initialHash, initialPage }),
    { type, payload },
) => {
    switch (type) {
        case PAGE_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
