import React from 'react'
import Page from '../../../containers/Page'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"cred"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: `
${'  ' || `
// TODO: Review.
`}

As we all know, "cred" is short for the "credibility" you earn when coming up from the streets or the underground— and *not* for the "credentials" sought by academic and corporate strivers. Yet it's no coincidence the two words share a root: They both merely *signify* what matters; they *both* count as paid dues, no? Which explains why indie rock is now overrun with strivers as well!
            `,
        }}
    />
)

export default Component
