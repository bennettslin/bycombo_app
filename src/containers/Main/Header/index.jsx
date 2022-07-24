import React from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import StyledFrame from '../StyledFrame'
import HomeButton from './HomeButton'
import Menu from './Menu'
import './style'

const MainHeader = () => (
    <StyledFrame>
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
    </StyledFrame>
)

export default MainHeader
