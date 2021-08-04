import { getDateTimeForGa } from '../build'
import { GA_ACCOUNT } from '../../constants/analytics'
import {
    BROWSER_NAME, BROWSER_VERSION, ENGINE_NAME, ENGINE_VERSION, OS_NAME, OS_VERSION, PLATFORM_TYPE, PLATFORM_VENDOR,
} from '../device'

const isGaUndefined = () => (
    typeof ga === 'undefined'
)

export const setCustomDimensions = () => {
    if (isGaUndefined()) {
        return
    }

    ga('set', 'dimension1', getDateTimeForGa(BUILD_DATE_TIME))
    ga('set', 'dimension2', BROWSER_NAME)
    ga('set', 'dimension3', BROWSER_VERSION)
    ga('set', 'dimension4', ENGINE_NAME)
    ga('set', 'dimension5', ENGINE_VERSION)
    ga('set', 'dimension6', OS_NAME)
    ga('set', 'dimension7', OS_VERSION)
    ga('set', 'dimension8', PLATFORM_TYPE)
    ga('set', 'dimension9', PLATFORM_VENDOR)
}

export const sendToGa = ({
    category,
    action,
    label,
    value,

}) => {
    if (isGaUndefined()) {
        return 'failure'
    }

    ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        ...label && { eventLabel: label },
        ...value && { eventValue: value },
    })

    return 'success'
}

export const logGa = () => {
    if (isGaUndefined()) {
        logServe('GA did not initialise.')

    } else {
        logServe(
            IS_PRODUCTION ?
                'GA initialised.' :
                `GA initialised with id ${GA_ACCOUNT}.`,
            {
                action: 'ga',
            }
        )
    }
}
