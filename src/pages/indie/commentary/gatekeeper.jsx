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
For many people, "gatekeeping" simply refers to any selection process that disfavors them. But then they apply their *own* criteria— which necessarily disfavor *others*— leading to confusion! So let's agree that a gatekeeper isn't some bogeyman we're all united against; some of us are, in fact, on the "for" side. The question now is: Which of us, exactly?

${'  ' || `
// TODO: Keep working on. Make clear that in the absence of such a gate, we'd revert to the natural order of "might makes right."
`}

It helps if we think of a literal gate— the purpose of which is to permit those who'd otherwise be left out, while preventing others who'd otherwise march right in. To put gatekeepers in charge, then, is to *subvert* the natural order of "might makes right"— and in music, such might comes from hard numbers, like the size of your fanbase.

${'  ' || `
// TODO: Keep working on. Explicitly state that the indie camp is on the side of "might makes right."
`}

So if, like me, you *despair* over being judged by the number of fans you have, then you're *not* opposed to gatekeeping— but rather, the lack of it!
            `,
        }}
    />
)

export default Component
