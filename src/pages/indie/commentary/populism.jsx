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

Every one of us minorities— whether racial, ethnic, or religious— also lives as a *numerical* minority. So when populists threaten to overpower the elites through sheer numerical might, that threat feels directed at us as well, even if we agree with their policies. After all, whose side will the numbers favor in the *future*? We were outnumbered before; why wouldn't we be once more?
            `,
        }}
    />
)

export default Component
