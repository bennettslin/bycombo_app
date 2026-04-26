const SAFE_WINDOW = {
    localStorage: {},
    sessionStorage: { length: 0 },
}

export const getIsServerSide = () => (
    typeof window === 'undefined'
)

export const getWindow = () => (
    getIsServerSide() ?
        SAFE_WINDOW :
        window
)
