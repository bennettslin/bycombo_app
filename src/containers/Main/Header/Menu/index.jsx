import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import {
    DEMOS_PAGE,
    APPLY_PAGE,
    PARTNERS_PAGE,
    INDIE_PAGE,
} from '../../../../constants/pages'
import './style'

const Menu = () => (
    <div
        {...{
            className: cx(
                'Menu',
            ),
        }}
    >
        <HeaderButton {...{ pagePath: DEMOS_PAGE }}>
            Demos
        </HeaderButton>
        <HeaderButton {...{ pagePath: APPLY_PAGE }}>
            Apply
        </HeaderButton>
        <HeaderButton {...{ pagePath: PARTNERS_PAGE }}>
            Partners
        </HeaderButton>
        <HeaderButton {...{ pagePath: INDIE_PAGE }}>
            Indie
        </HeaderButton>
    </div>
)

export default Menu
