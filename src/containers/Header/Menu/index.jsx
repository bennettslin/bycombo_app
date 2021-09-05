import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import {
    ABOUT_PAGE,
    APPLY_PAGE,
    CONTACT_PAGE,
    LINKS_PAGE,
} from '../../../constants/pages'
import './style'

const Menu = () => (
    <div
        {...{
            className: cx(
                'Menu',
            ),
        }}
    >
        <HeaderButton {...{ pageLink: ABOUT_PAGE }}>
            About
        </HeaderButton>
        <HeaderButton {...{ pageLink: APPLY_PAGE }}>
            Apply
        </HeaderButton>
        <HeaderButton {...{ pageLink: CONTACT_PAGE }}>
            Contact
        </HeaderButton>
        <HeaderButton {...{ pageLink: LINKS_PAGE }}>
            Links
        </HeaderButton>
    </div>
)

export default Menu
