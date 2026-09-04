import React from 'react'
import cx from 'classnames'
import PageRow from '../PageRow'
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
        <PageRow isBottomRow />
    </Flex>
)

export default PageFooter
