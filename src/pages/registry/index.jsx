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
// TODO: Review a few more times.
`}

The "indiefication" of the arts has created both a "[prisoner's dilemma](/indie#democratization-causes-noise-pollution)" and a [vicious circle](/indie#paid-dues-shrivel-the-noblest-spirits). A prisoner's dilemma— in that any artist who redirects 5% of their effort toward *getting* the job, away from simply *deserving* it, will then force all others to do the same. And, a vicious circle— in that any artist who now redirects *10%* of their effort… well, you get the picture.

${'  ' || `
// TODO: Revise. Mention accepting obscurity and granting amnesty.
`}

At BYCombo, we believe that indiefication is the reason for the cultural stagnation of our times. And to solve it? A generation of artists must now martyr themselves by doubling down to make art for untold years, until you— as a business partner, discerning listener, or future historian— feel confident enough to give them a chance. Here's how:

**To earn your trust, BYCombo bands promise *not* to get themselves known. Instead, each one will sacrifice a serious chunk of lifetime— 25,000 hours, or twelve full-time years— to make a demo that advances the art form.**

But remember, the [indie tastemakers](/indie#hustlers-lack-a-theory-of-future-minds), [poptimists](/indie#underdogs-are-supremacists-in-effect), and [tech platforms](/indie#fair-practices-follow-the-numbers) each have their reasons to maintain the status quo. To save the arts, then, we need *others* to step up. Can one of these saviors be… you? Please contact any of our bands directly if you have an offer or opportunity for them to consider!
                `,
                (
                    <DemoLink {...bobtailYearlings} />
                ),
            ],
        }}
    />
)

export default Component
