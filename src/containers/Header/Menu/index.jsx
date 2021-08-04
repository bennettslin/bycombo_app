import React from 'react'
import cx from 'classnames'
import MenuButton from './MenuButton'
import {
    BAND_PAGE,
    CONTACT_PAGE,
    ESSAYS_PAGE,
    // SHOWS_PAGE,
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
        <MenuButton {...{ pageLink: BAND_PAGE }}>
            Band
        </MenuButton>
        {/* <MenuButton {...{ pageLink: SHOWS_PAGE }}>
            Shows
        </MenuButton> */}
        <MenuButton {...{ pageLink: ESSAYS_PAGE }}>
            Essays
        </MenuButton>
        <MenuButton {...{ pageLink: CONTACT_PAGE }}>
            Contact
        </MenuButton>
    </div>
)

export default Menu
