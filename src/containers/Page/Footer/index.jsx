import React from 'react'
import cx from 'classnames'
import TopLevelRow from './TopLevelRow'
import './style'

const PageFooter = () => (
    <div
        {...{
            className: cx(
                'PageFooter',
            ),
        }}
    >
        <TopLevelRow isBottomRow />
    </div>
)

export default PageFooter
