import { logAnalytics } from './src/utils/analytics'
import { logBuild } from './src/utils/build'
import { logDevice } from './src/utils/device'
import { globaliseLogs } from './src/utils/global'

// Import these here just to make them available.
import './src/scss/style'

globaliseLogs()

logBuild()
logDevice()
logAnalytics()

logSuccess(`Hi, I'm looking for another developer or two to help build some music-based apps. If this sounds like interesting work to you, please get in touch! Bennett`)

export { wrapRootElement } from './src/utils/gatsby'
