import React from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import MailingList from '../../../components/MailingList'
import './style'

const MainFooter = () => (
    <Flex
        {...{
            className: cx(
                'MainFooter',
            ),
            gap: 'sm',
        }}
    >

        <MailingList isWide />
    </Flex>
)

export default MainFooter
