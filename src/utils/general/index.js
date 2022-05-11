export const join = (array = [], separator = '') => (
    array.filter(entry => (
        Boolean(entry) || Number.isFinite(entry)
    )).join(separator)
)
