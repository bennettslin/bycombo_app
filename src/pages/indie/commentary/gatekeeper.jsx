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
${'  ' || `
// TODO: Review commentary a few more times.
`}

For many, "gatekeeping" refers to *any* selection process that rejects them… even as they differ wildly on how it should work *instead*. But this makes the gatekeeper a bogeyman: at once reviled by all, yet impossible to defeat! So let's clarify what gatekeeping means, in a way that allows each of us to take action— with some for, and others against. Now, who's on which side?

It helps to think of a literal gate— the purpose of which is to let in those who'd otherwise be shut out, while barring others who'd march right in. Without it, we'd revert to the natural order of "might makes right"… and in the arts, such might comes from concrete metrics. So the indie camp, which judges you on the size of your fanbase, stands *opposed* to any gatekeeping.

But if your dream, like mine, is to be picked based on immeasurable qualities like talents and originality— in other words, what the major labels looked for in their heyday— then you stand *with* the gatekeepers! In which case, all your actions should aim to keep them in charge.
            `,
        }}
    />
)

export default Component
