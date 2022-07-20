import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import {
    ABOUT_PAGE,
    APPLY_PAGE,
    CONTACT_PAGE,
    DEMOS_PAGE,
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
        <HeaderButton {...{ pagePath: ABOUT_PAGE }}>
            About
        </HeaderButton>
        <HeaderButton {...{ pagePath: APPLY_PAGE }}>
            Apply
        </HeaderButton>
        <HeaderButton {...{ pagePath: CONTACT_PAGE }}>
            Contact
        </HeaderButton>
        <HeaderButton {...{ pagePath: DEMOS_PAGE }}>
            Registry
        </HeaderButton>
    </div>
)

export default Menu
