import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Background from './Background'
import Main from '../Main'
import Flex from '../../components/Flex'
import Popups from '../../components/Popups'
import './style'

const Wrapper = ({ children }) => (
    <Flex
        {...{
            className: cx(
                'Wrapper',
            ),
            flexDirection: 'columnReverse',
        }}
    >
        <Background />
        <Main>{children}</Main>
        <Popups />
    </Flex>
)

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper
