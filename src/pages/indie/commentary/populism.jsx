import React from 'react'
import Page from '../../../containers/Page'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"populism"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: `
${'  ' || `
// TODO: Keep working on.
`}

At its core, populism promises that sheer numerical might will always get its way. Yet every racial minority belongs to a *numerical* minority, which means we'll oppose populism out of principle, even if we agree with a movement's policies. I suppose this isn't obvious if you've always belonged to the majority, yet I'm still surprised when people fail to understand it.
            `,
        }}
    />
)

export default Component
