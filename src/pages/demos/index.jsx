import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../content/demos/2023/bobtail-yearlings/yearlings-bobtail'

const TITLE = `Return of the rock martyrs… and *saviors*`
const DESCRIPTION = `A registry of demos made by interdependent rock bands.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: [
                `
At BYCombo, we believe that "[indiefication](/indie#the-simplest-explanation-is-likely-correct)" has caused the arts to decline. And to reverse it? The best artists must now martyr themselves by doubling down to make art for untold years, all the while remaining unknown to the public, until you— as a budding entrepreneur, discerning curator, or future historian— feel confident to grant them amnesty. Here's how:

**Every band in this demo registry has pledged *not* to get themselves known. Instead, they've each sacrificed a serious chunk of lifetime— 25,000 hours, or twelve full-time years— to make a demo that advances the art form.**

Remember, the [indie tastemakers](/indie#hustlers-lack-a-theory-of-future-minds), [poptimists](/indie#underdogs-are-supremacists-in-effect), and [tech platforms](/indie#fair-practices-follow-the-numbers) all have their reasons to keep indiefication in place. To save the arts, then, we need *others* to step up. Can one of these saviors be you? Please contact any of our bands directly if you have an opportunity or offer for them to consider!
                `,
                (
                    <DemoLink {...bobtailYearlings} />
                ),
            ],
        }}
    />
)

export default Component
