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
// TODO: Review a few more times.
`}

At its core, populism promises to get its way through sheer numerical might. Yet every one of us minorities also experiences life as a *numerical* minority— which means we'll oppose populism as a principle, even if we like its policies. After all, whose side will the numbers favor in the *future*? It astounds me that so many fail to consider this.
            `,
        }}
    />
)

export default Component
