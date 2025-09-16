import { combineReducers } from 'redux'
import { getPageReducer } from './page/reducer'
import { PAGE_STORE } from '../constants/store'

export const getReducers = ({
    initialHash,
    initialPage,

}) => combineReducers({
    [PAGE_STORE]: getPageReducer({ initialHash, initialPage }),
})
