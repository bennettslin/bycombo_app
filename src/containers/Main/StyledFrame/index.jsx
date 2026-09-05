import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledFrame = ({ className, style, children }) => (
    <div
        {...{
            className: cx(
                'StyledFrame',
                className,
            ),
            style,
        }}
    >
        {children}
    </div>
)

StyledFrame.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
}

export default StyledFrame
