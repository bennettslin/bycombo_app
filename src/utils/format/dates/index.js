import { MONTH_NAMES } from '../../../constants/dates'

export const getHeaderFromDate = ({ year, month, day, updated } = {}) => (
    [
        updated ? 'Updated' : null,
        [day, MONTH_NAMES[month], year]
            .filter(value => Boolean(value))
            .join(' '),
    ]
        .filter(value => Boolean(value))
        .join(' ')
)
