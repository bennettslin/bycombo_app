import React from 'react'
import Flex from '../../../../components/Flex'
import HomeButton from '../HomeButton'
import ShareLink from '../../../Page/PageRow/ShareLink'
import Menu from '../Menu'

const DefaultLayout = () => (
    <>
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
    </>
)

export default DefaultLayout
