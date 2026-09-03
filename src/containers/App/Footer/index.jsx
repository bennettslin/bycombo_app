import React from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import './style'

const AppFooter = () => (
    <Flex
        {...{
            className: cx(
                'AppFooter',
                'fontSize__sm',
            ),
        }}
    >
        {`© ${new Date().getFullYear()} BYCombo`}
    </Flex>
)

export default AppFooter
