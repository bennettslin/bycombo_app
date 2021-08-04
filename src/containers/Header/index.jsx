import React from 'react'
import cx from 'classnames'
import Logo from './LogoButton'
import Menu from './Menu'
import './style'

const Header = () => (
    <div
        {...{
            className: cx(
                'Header',
            ),
        }}
    >
        <Logo />
        <Menu />
    </div>
)

export default Header
