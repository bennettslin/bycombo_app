import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import './style'

const MenuButton = forwardRef(({
    className,
    id,
    children,
    ...rest

}, ref) => (
    <Button
        {...{
            ref,
            className: cx(
                'MenuButton',
                className,
            ),
            ...id && {
                analyticsLabel: `MenuButton__${id}`,
            },
            ...rest,
        }}
    >
        {children}
    </Button>
))

MenuButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default MenuButton
