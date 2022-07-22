export const APP_TITLE = 'BYCombo'
export const APP_DESCRIPTION =
    'BYCombo is a nonprofit incubator of rock bands.'
export const APP_NAME = 'byCombo'
export const DOMAIN = APP_NAME.toLowerCase()

export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.DESTINATION) {
        case 'local':
            return `${APP_NAME}_local`
        case 'candidate':
            return `${APP_NAME}_candidate`
        case 'delivery':
            return `${APP_NAME}_delivery`
        default:
            return APP_NAME
    }
}

export const getS3BucketName = () => {
    switch (process.env.DESTINATION) {
        case 'candidate':
            return `${DOMAIN}--candidate`
        case 'delivery':
            return `${DOMAIN}--delivery`
        default:
            return `${DOMAIN}--production`
    }
}
