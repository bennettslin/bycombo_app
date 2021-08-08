import { GA_ACCOUNT } from '../../constants/analytics'
import { ANALYTICS__FAILURE, ANALYTICS__SUCCESS } from '../logger/helpers/styles'

const isGtagUndefined = () => (
    typeof gtag === 'undefined'
)

export const sendToAnalytics = ({
    category,
    action,
    label,
    value,

}) => {
    if (isGtagUndefined()) {
        return ANALYTICS__FAILURE
    }

    gtag('event', category, {
        hitType: 'event',
        action,
        ...label && { label },
        ...value && { value },
    })

    return ANALYTICS__SUCCESS
}

export const logAnalytics = () => {
    if (isGtagUndefined()) {
        logServe('GA did not initialise.')

    } else {
        logServe(
            IS_PRODUCTION ?
                'GA initialised.' :
                `GA initialised with id ${GA_ACCOUNT}.`,
            {
                action: 'gtag',
            }
        )
    }
}
