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

logSuccess(`Hi, I'm looking for a developer or two to help me build some music-based apps. I can pay a fixed sum. (These apps will be free, probably.) If this sounds interesting to you, please tell me your story and send examples of your work to the contact email given on this website. Thanks! Bennett`)

export { wrapRootElement } from './src/utils/gatsby'
