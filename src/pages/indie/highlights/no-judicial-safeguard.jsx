import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from './constants'

const TITLE = `"no judicial safeguard"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> While the story is likely apocryphal, Jackson supposedly remarked, "John Marshall has made his decision, now let him enforce it." […] Ignoring the Court's ruling that the Cherokees were an independent people entitled to the land on which they lived, Jackson sent federal troops to evict them. The result was the Cherokees' forced and deadly migration west along the infamous Trail of Tears.

"[Executive Enforcement of Judicial Orders.](https://www.fjc.gov/history/administration/executive-enforcement-judicial-orders)" *Federal Judicial Center*.
            `,
        }}
    />
)

export default Component
