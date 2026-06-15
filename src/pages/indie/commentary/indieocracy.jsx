import React from 'react'
import Page from '../../../containers/Page'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"indieocracy"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: `
In the movie [*Idiocracy*](https://en.wikipedia.org/wiki/Idiocracy)…
            `,
        }}
    />
)

export default Component
