import React from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import MailingList from '../../../components/MailingList'
import './style'

const PageFooter = () => (
    <Flex
        {...{
            className: cx(
                'PageFooter',
            ),
        }}
    >
        <MailingList isWide />
    </Flex>
)

export default PageFooter
