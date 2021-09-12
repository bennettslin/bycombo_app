import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
The application form is coming soon! In the meantime, please get in touch if you have any questions.
            `,
        }}
    />
)

export default Component
