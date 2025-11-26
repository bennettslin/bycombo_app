import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../content/demos/2023/bobtail-yearlings/yearlings-bobtail'

const TITLE = `Return of the rock martyrs… and saviors!`
const DESCRIPTION = `A registry of demos made by our interdependent rock bands.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: [
                `
At BYCombo, we blame "[indiefication](/indie#the-revolution-will-not-be-decentralized)" for causing the arts to decline. And to reverse this? The best artists must now martyr themselves by making art for untold years, all the while remaining low-status and unknown, until you— as a budding entrepreneur, discerning curator, or future historian— decide to grant them amnesty. Here's the deal:

**Every band in this demo registry has pledged *not* to be indie— that is, *not* to get themselves known. Instead, they've each sacrificed a serious chunk of lifetime— 25,000 hours or more— on a demo that advances the art form.**

But remember, the indie tastemakers and their allies— the "[poptimists](/indie#underdogs-are-supremacists-in-effect)" and the [tech platforms](/indie#fair-practices-follow-the-numbers)— each have their reasons to lock indiefication in place. To save the arts, then, we'll need *others* to step up. Can one such savior… be you? If you have an opportunity or offer for any BYCombo band to consider, please contact them directly!
                `,
                (
                    <DemoLink {...bobtailYearlings} />
                ),
            ],
        }}
    />
)

export default Component
