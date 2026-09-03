import React from 'react'
import cx from 'classnames'
import TopLevelRow from './TopLevelRow'
import Flex from '../../../components/Flex'
import './style'

const PageFooter = () => (
    <Flex
        {...{
            className: cx(
                'PageFooter',
            ),
        }}
    >
        <TopLevelRow isBottomRow />
    </Flex>
)

export default PageFooter
