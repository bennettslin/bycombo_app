import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
If you have any questions, or if you'd like to help us get the word out about BYCombo, please get in touch. Thanks!
            `,
        }}
    />
)

export default Component
