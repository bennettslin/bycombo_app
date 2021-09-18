import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledFrame = ({ className, children }) => (
    <div
        {...{
            className: cx(
                'StyledFrame',
                className,
            ),
        }}
    >
        {children}
    </div>
)

StyledFrame.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledFrame
