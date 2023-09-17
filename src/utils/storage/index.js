import { getWindow } from '../browser'

export const getWindowStorage = () => {
    return getWindow().localStorage
}

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
