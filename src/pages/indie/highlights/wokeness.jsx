import React from 'react'
import Page from '../../../containers/Page'

const TITLE = `"wokeness"`
const DESCRIPTION = `Some personal commentary.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
Lorem ipsum.
            `,
        }}
    />
)

export default Component
