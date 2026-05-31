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
// TODO: Review commentary.
`}

For many, "gatekeeping" refers to *any* selection process that rejects them… even as they differ wildly on how it should work instead. But this makes the gatekeeper a mere *stand-in* for villainy, against which nothing can be done! Let's redefine gatekeeping, then, in a way that *some* of us can support— thus allowing each of us to act, in accordance with our side. So now, who's for it?

It helps to think of a *literal* gate— the purpose of which is to let in those who'd otherwise be shut out, while barring others who'd march right in. Without it, we'd revert to the natural order of "might makes right"… and in the arts, such might comes from concrete metrics. So the indie camp, which judges you on the size of your fanbase, stands *opposed* to any gatekeepers.

But if your dream, like mine, is to be picked based on immeasurable qualities like talents and originality— in other words, what the major labels valued in their heyday— then you're in *favor* of gatekeeping. In which case, I could sure use some help with bringing it back!
            `,
        }}
    />
)

export default Component
