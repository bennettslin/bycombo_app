import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import {
    ABOUT_PAGE,
    APPLY_PAGE,
    CONTACT_PAGE,
    REGISTRY_PAGE,
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
        <HeaderButton {...{ pagePath: REGISTRY_PAGE }}>
            Registry
        </HeaderButton>
        <HeaderButton {...{ pagePath: APPLY_PAGE }}>
            Apply
        </HeaderButton>
        <HeaderButton {...{ pagePath: CONTACT_PAGE }}>
            Contact
        </HeaderButton>
    </div>
)

export default Menu
