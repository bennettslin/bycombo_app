import { getUnbrokenEmDashText } from './emDash'
import { getSmartQuotedText } from './smartQuote'

export const getTruncatedText = (text, maxLength = 160) => (
    text.length > maxLength ?
        /**
         * If greater than max length, truncate to max length, remove
         * trailing space, and add ellipsis.
         */
        text.substring(0, maxLength).trim() + '…' :
        text
)

export const getCapitalizedText = text => (
    `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`
)

export const getFormattedText = text => (
    getUnbrokenEmDashText(
        getSmartQuotedText(text),
    )
)
