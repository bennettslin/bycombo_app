import { getWindow } from '../browser'

export const getWindowStorage = () => {
    return getWindow().localStorage
}

export const getIsWindowNewSession = () => (
    getWindow().sessionStorage.length <= 1
)

export const setInStorage = (key, value) => {
    getWindowStorage()[key] = value
}

export const getBoolFromTextValue = textValue => textValue === 'true'

export const getBoolFromStorage = key => {
    const
        storedValue = getWindowStorage()[key],
        savedValue = getBoolFromTextValue(storedValue)

    // This only saves upon initial retrieval.
    setBoolInStorage(key, savedValue)
    return savedValue
}

export const setBoolInStorage = (key, value) => {
    getWindowStorage()[key] = value ? 'true' : 'false'
}

export const setWindowLocationPath = (pagePath) => {
    /**
     * Remove search query from window location once it's set in Redux state.
     * Also remove section id such that back button will return to most recent
     * scrolled position rather than section id heading.
     */
    getWindow().history.replaceState(
        // eslint-disable-next-line no-undef
        structuredClone(
            // Clone of window history state retains original scroll position.
            getWindow().history.state,
        ), '', `/${pagePath}`)
}
