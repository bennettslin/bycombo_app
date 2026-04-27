import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"college-educated"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> The difference between "uncool" '90s alternative and "cool" '90s indie boils down to demographics: grunge and post-grunge [i.e., alternative] bands were geared mainly toward angsty, immature teenagers, while indie groups were targeted at cynical, over-educated college kids and post-graduate twentysomethings.

Hyden, Steven. "[Part 6: 1995: Live, Bush, and Alanis Morissette Take the Pop Path.](https://www.avclub.com/part-6-1995-live-bush-and-alanis-morissette-take-th-1798223405)" *The A.V. Club*, December 2010.
            `,
        }}
    />
)

export default Component
