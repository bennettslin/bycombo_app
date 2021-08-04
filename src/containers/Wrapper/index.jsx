import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const Wrapper = ({ children }) => (
    <div
        {...{
            className: cx(
                'Wrapper',
                'Asap'
            ),
        }}
    >
        {children}
    </div>
)

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper
