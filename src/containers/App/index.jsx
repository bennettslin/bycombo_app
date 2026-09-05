import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import Main from '../Main'
import AppFooter from './Footer'
import './style'

const App = ({ children }) => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setTimeout(() => setDidMount(true), 0)
    }, [])

    return (
        <CSSTransition
            appear
            {...{
                in: didMount,
                timeout: 0,
                classNames: {
                    enterDone: 'shown',
                },
            }}
        >
            <div
                {...{
                    className: cx(
                        'App',
                        'hidden',
                        'font__text',
                    ),
                }}
            >
                <Main>{children}</Main>
                <AppFooter />
            </div>
        </CSSTransition>
    )
}

App.propTypes = {
    children: PropTypes.node.isRequired,
}

export default App
