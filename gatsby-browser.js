import {
    logGa,
    setCustomDimensions,
} from './src/utils/analytics'
import { logBuild } from './src/utils/build'
import { logDevice } from './src/utils/device'
import { globaliseLogs } from './src/utils/global'

// Import these here just to make them available.
import './src/scss/style'

globaliseLogs()
setCustomDimensions()

logBuild()
logDevice()
logGa()

export { wrapRootElement } from './src/utils/gatsby'
