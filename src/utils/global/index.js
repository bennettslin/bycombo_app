import {
    logEvent,
    logServe,
    logError,
} from '../logger'

export const globaliseLogs = () => {
    global.logEvent = logEvent
    global.logServe = logServe
    global.logError = logError
}
