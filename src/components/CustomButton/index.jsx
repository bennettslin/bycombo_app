import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import './style'

const CustomButton = forwardRef(({
    className,
    id,
    children,
    ...rest

}, ref) => (
    <Button
        {...{
            ref,
            className: cx(
                'CustomButton',
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

CustomButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default CustomButton
