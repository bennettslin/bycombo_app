import React from 'react'
import cx from 'classnames'
import MenuButton from './MenuButton'
import {
    ABOUT_PAGE,
    APPLY_PAGE,
    BANDS_PAGE,
    CONTACT_PAGE,
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
        <MenuButton {...{ pageLink: ABOUT_PAGE }}>
            About
        </MenuButton>
        <MenuButton {...{ pageLink: APPLY_PAGE }}>
            Apply
        </MenuButton>
        <MenuButton {...{ pageLink: BANDS_PAGE }}>
            Bands
        </MenuButton>
        <MenuButton {...{ pageLink: CONTACT_PAGE }}>
            Contact
        </MenuButton>
    </div>
)

export default Menu
