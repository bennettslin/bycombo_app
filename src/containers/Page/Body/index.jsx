import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Heading from '../../../components/Heading'
import './style'

const Body = ({ title, children }) => (
    <div
        {...{
            className: cx(
                'Body',
            ),
        }}
    >
        {title && (
            <Heading isBodyHeading>{title}</Heading>
        )}
        {children}
    </div>
)

Body.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Body
