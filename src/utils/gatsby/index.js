import React from 'react'
import { Provider } from 'react-redux'
import Wrapper from '../../containers/Wrapper'
import Header from '../../containers/Header'
import Main from '../../containers/Main'
import SubFooter from '../../containers/SubFooter'
import { getReduxStore } from './store'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
    <Provider {...{ store: getReduxStore(element) }}>
        <Wrapper>
            <Header />
            <Main>{element}</Main>
            <SubFooter />
        </Wrapper>
    </Provider>
)
