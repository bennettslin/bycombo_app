import React from 'react'
import Page from '../../../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Placeholder Yearling's Bobtail page!

Blah blah blah
            `,
        }}
    />
)

export default Component
