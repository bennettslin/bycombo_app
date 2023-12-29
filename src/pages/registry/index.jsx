import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../content/registry/2023/bobtail-yearlings/yearlings-bobtail'

const TITLE = `Return of the rock martyrs… and *saviors*`
const DESCRIPTION = `A public registry of interdependent rock bands.`

const Component = () => (
    <Page
        {...{
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: [
                `
# ${TITLE}

Business partners, discerning listeners, and future historians:

**To earn your trust, each band in BYCombo's public registry sacrificed a serious chunk of lifetime— at least 25,000 hours, or twelve full-time years— on a demo that advances the art form.**

${'  ' || `
// TODO: Revise. Make about content vs canonical here.
`}

But remember, we require our bands *not* to optimize for an audience in the present by neglecting those in the future. Which means indie rock's gatekeepers— along with its allies, the [poptimists](/indie#underdogs-are-supremacists-in-effect) and [tech platforms](/indie#fair-practices-defer-to-the-data)— will dismiss them as hobbyists! If rock is to be saved, then, we need *others* to tell the world about them. Can one of these rock saviors… be you?

If you have an offer or opportunity for any of our bands to consider, please contact them directly!
                `,
                (
                    <DemoLink {...bobtailYearlings} />
                ),
            ],
        }}
    />
)

export default Component
