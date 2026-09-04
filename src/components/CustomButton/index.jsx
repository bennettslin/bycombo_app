import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import './style'

const CustomButton = forwardRef(({
    className,
    id,
    isInMenu,
    children,
    ...rest

}, ref) => (
    <Button
        {...{
            ref,
            className: cx(
                'CustomButton',
                isInMenu && 'CustomButton__isInMenu',
                className,
            ),
            ...id && {
                analyticsLabel: `CustomButton__${id}`,
            },
            ...rest,
        }}
    >
        {children}
    </Button>
))

CustomButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    isInMenu: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default CustomButton
