import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../content/registry/2023/bobtail-yearlings/yearlings-bobtail'

const TITLE = `Return of the rock martyrs… and *saviors*`
const DESCRIPTION = `A public registry of interdependent rock bands.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: [
                `
${'  ' || `
// TODO: Keep working on. Make last sentence so it's more about *needing* to divert time and energy. Which means the sentence can't really begin, "Knowing this…"
`}

To squeal or not? This is the prisoner's dilemma. Well, thanks to indie rock, today's artists face a similar decision: To hustle or not? We're all better off if *no* one hustles, of course— just like in the past. But once *any* artist hustles, they'll hog up all the attention. Which means *every* artist must now divert time and energy toward the hustle— to the detriment of the arts.

BYCombo believes that solving this "artist's dilemma" is the key to ending the cultural stagnation of our times.

Business partners, discerning listeners, and future historians:

**To earn your trust, each band in BYCombo's public registry sacrificed a serious chunk of lifetime— at least 25,000 hours, or twelve full-time years!— on a demo that advances the art form.**

But remember, since our bands aspire to make canonical art for the *future*— they'll struggle, on their own, to build a fanbase in the *present*. So indie rock's gatekeepers, along with its allies— the [poptimists](/indie#underdogs-are-supremacists-in-effect) and [tech platforms](/indie#fair-practices-follow-the-numbers)— will dismiss them as hobbyists! If rock is to be saved, then, we need *others* to give them a chance. Can one of these rock saviors… be you?

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
