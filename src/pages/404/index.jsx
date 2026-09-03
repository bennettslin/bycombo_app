import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            title: 'Page not found',
            noShare: true,
        }}
    />
)

export default Component
