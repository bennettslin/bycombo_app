import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ButtonAnimatable = ({
    children,
}) => (
    <div
        {...{
            className: cx(
                'ButtonAnimatable',
            ),
        }}
    >
        {children}
    </div>
)

ButtonAnimatable.propTypes = {
    children: PropTypes.any,
}

export default ButtonAnimatable
