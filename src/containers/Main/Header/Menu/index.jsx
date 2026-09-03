import React from 'react'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import HeaderButton from '../HeaderButton'
import {
    DEMOS_PAGE,
    APPLY_PAGE,
    INDIE_PAGE,
} from '../../../../constants/pages'
import './style'

const Menu = () => (
    <Flex
        {...{
            className: cx(
                'Menu',
            ),
            flexWrap: 'wrap',
        }}
    >
        <HeaderButton {...{ pagePath: DEMOS_PAGE }}>
            Demos
        </HeaderButton>
        <HeaderButton {...{ pagePath: APPLY_PAGE }}>
            Apply
        </HeaderButton>
        <HeaderButton {...{ pagePath: INDIE_PAGE }}>
            Indie
        </HeaderButton>
    </Flex>
)

export default Menu
