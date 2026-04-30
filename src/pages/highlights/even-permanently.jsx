import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"even permanently"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> Some even believe that artificial general intelligence, or A.G.I., will create a permanent underclass. [The theory] is that people have a limited window of time to build wealth before A.I. and robotics are advanced enough to fully replace human labor.

> At that point, we will get frozen in our current class positions: The rich will […] deploy superintelligent machines to do their bidding, [while] everyone else will be rendered useless and unemployable, left to live off welfare scraps.

Sun, Jasmine. "[Silicon Valley Is Bracing for a Permanent Underclass.](https://www.nytimes.com/2026/04/30/opinion/ai-labor-work-force-silicon-valley.html)" *New York Times*, April 2026.
            `,
        }}
    />
)

export default Component
