import React from 'react'
import Page from '../../../containers/Page'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"gatekeeper"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: `
For many, "gatekeeping" refers to *any* selection process that rejects them… even as they differ wildly on how it should work *instead*. But this makes the gatekeeper a bogeyman: at once reviled by all, yet impossible to defeat! So let's clarify what gatekeeping means, in a way that allows each of us to take action— with some for, and others against. Now, who's on which side?

It helps if we think of a literal gate— the purpose of which is to permit those who'd otherwise be shut out, while preventing others who'd march right in. Without gatekeepers, then, we'd revert to the natural order of "might makes right"… and in the arts, such might comes from hard numbers. So the indie camp, which judges you on the size of your fanbase, stands *against*.

${'  ' || `
// TODO: Keep working on. Explicitly state that the indie camp is on the side of "might makes right."
`}

But if, like me, you *despair* over being judged by the number of fans you have, then you're *not* opposed to gatekeeping— but rather, the lack of it!
            `,
        }}
    />
)

export default Component
