export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.DESTINATION) {
        case 'local':
            return 'bobtailYearlings_local'
        case 'candidate':
            return 'bobtailYearlings_candidate'
        case 'delivery':
            return 'bobtailYearlings_delivery'
        default:
            return 'bobtailYearlings'
    }
}

export const getS3BucketName = () => {
    switch (process.env.DESTINATION) {
        case 'candidate':
            return 'bobtailyearlings--candidate'
        case 'delivery':
            return 'bobtailyearlings--delivery'
        default:
            return 'bobtailyearlings--production'
    }
}
