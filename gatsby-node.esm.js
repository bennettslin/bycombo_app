import webpack from 'webpack'
import FilterWarningsPlugin from 'webpack-filter-warnings-plugin'
import {
    getIsProductionBuild,
    getIsRuntimeBuild,
} from './src/utils/server'

export const onCreateWebpackConfig = ({ actions }) => {

    // Get primitive value of current date and time.
    const buildDateTime = new Date().valueOf()

    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                BUILD_DATE_TIME: buildDateTime,
                IS_RUNTIME: getIsRuntimeBuild(),
                IS_PRODUCTION: getIsProductionBuild(),
            }),

            new FilterWarningsPlugin({
                exclude: /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
            }),
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.scss', '.svg'],
        },
    })
}
