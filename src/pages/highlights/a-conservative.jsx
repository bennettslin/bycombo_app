import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"a conservative"`
const DESCRIPTION = `Highlighted text from linked source.`

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
