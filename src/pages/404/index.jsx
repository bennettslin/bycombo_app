import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        is404Page
        {...{
            title: 'Page not found',
        }}
    />
)

export default Component
