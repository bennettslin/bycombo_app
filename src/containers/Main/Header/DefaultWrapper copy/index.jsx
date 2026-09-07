import React from 'react'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import HomeButton from '../HomeButton'
import ShareLink from '../../../Page/Row/ShareLink'
import Menu from '../Menu'
import './style'

const DefaultWrapper = () => (
    <Flex
        {...{
            className: cx(
                'DefaultHeaderWrapper',
            ),
            justifyContent: 'spaceBetween',
            alignItems: 'stretch',
            gap: 'xs',
        }}
    >
        <HomeButton />
        <Flex
            {...{
                flexDirection: 'column',
                justifyContent: 'spaceBetween',
                alignItems: 'flexEnd',
            }}
        >
            <Menu />
            <ShareLink />
        </Flex>
    </Flex>
)

export default DefaultWrapper
