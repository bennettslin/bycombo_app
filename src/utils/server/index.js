export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.DESTINATION) {
        case 'local':
            return 'byCombo_local'
        case 'candidate':
            return 'byCombo_candidate'
        case 'delivery':
            return 'byCombo_delivery'
        default:
            return 'byCombo'
    }
}

export const getS3BucketName = () => {
    switch (process.env.DESTINATION) {
        case 'candidate':
            return 'bycombo--candidate'
        case 'delivery':
            return 'bycombo--delivery'
        default:
            return 'bycombo--production'
    }
}
