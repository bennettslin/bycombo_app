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
To squeal or not? This is the well-known "prisoner's dilemma." Well, thanks to indie rock, today's artists face a similar decision: To hustle or not? We're all better off if *no one* hustles, of course— just like in the past. But once *any* artist hustles, they'll hog up all the attention. Which means *every* artist must now waste time and energy on the hustle— to the detriment of the arts.

At BYCombo, we believe this "artist's dilemma" is the reason for the cultural stagnation of our times. And to solve it? A generation of artists must now martyr themselves by doubling down to make art for untold years, until you— as a business partner, discerning listener, or future historian— feel confident to give them a chance. Here's how:

**To earn your trust, BYCombo bands promise *not* to get themselves known. Instead, each one will sacrifice a serious chunk of lifetime— 25,000 hours, or twelve full-time years— to make a demo that advances the art form.**

But remember, the [indie tastemakers](/indie#hustlers-lack-a-theory-of-future-minds), [poptimists](/indie#underdogs-are-supremacists-in-effect), and [tech platforms](/indie#fair-practices-follow-the-numbers) each have their reasons to keep the artist's dilemma in place. So if the arts are to be saved, we need *others* to step up. Can one of these saviors be you? Please contact any of our bands directly if you have an offer or opportunity for them to consider!
                `,
                (
                    <DemoLink {...bobtailYearlings} />
                ),
            ],
        }}
    />
)

export default Component
