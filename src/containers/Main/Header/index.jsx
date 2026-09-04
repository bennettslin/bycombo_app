import React from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import StyledFrame from '../StyledFrame'
import PageRow from '../../Page/PageRow'
import HomeButton from './HomeButton'
import Menu from './Menu'
import './style'

const MainHeader = () => (
    <StyledFrame
        {...{
            className: cx(
                'MainHeaderFrame',
            ),
        }}
    >
        <Flex
            {...{
                flexDirection: 'column',
                gap: 'xs',
            }}
        >
            <Flex
                {...{
                    className: cx(
                        'MainHeader',
                    ),
                    justifyContent: 'spaceBetween',
                    gap: 'xs',
                }}
            >
                <HomeButton />
                <Menu />
            </Flex>
            <PageRow />
        </Flex>
    </StyledFrame>
)

export default MainHeader
