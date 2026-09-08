import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../components/Flex'
import Header from './Header'
import './style'

const Main = ({ children }) => (
    <Flex
        {...{
            className: cx(
                'Main',
            ),
            flexGrow: 1,
            flexDirection: 'column',
        }}
    >
        <Header />
        {children}
    </Flex>
)

Main.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Main
