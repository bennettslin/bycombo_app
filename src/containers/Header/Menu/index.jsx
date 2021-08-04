import React from 'react'
import cx from 'classnames'
import MenuButton from './MenuButton'
import {
    APPLY_PAGE,
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
        <MenuButton {...{ pageLink: APPLY_PAGE }}>
            Apply
        </MenuButton>
        <MenuButton {...{ pageLink: CONTACT_PAGE }}>
            Contact
        </MenuButton>
    </div>
)

export default Menu
