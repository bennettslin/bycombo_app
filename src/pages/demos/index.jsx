import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../assets/images/bobtailYearlings.png'

const Component = () => (
    <Page
        {...{
            body: [
                `
# Return of the rock martyrs… and *saviors*!

**To earn your trust as a listener, BYCombo enforces a steep cost of entry. Each band in this registry sacrificed a serious chunk of lifetime— at least 25,000 hours!— to make a demo that objectively advances the art form.**

But remember, the indie gatekeepers will *ignore* these demos. So if rock is to be saved as an art form, we need *others* to tell the world about our bands. Can one of these rock saviors… be you?

Please contact any of our bands directly if you have an offer or opportunity for them to consider!
                `,
                (
                    <DemoLink
                        {...{
                            band: `Bobtail Yearlings`,
                            title: `Yearling's Bobtail`,
                            email: `info@bobtailyearlings.com`,
                            description: `"A hundred *Yearling's Bobtail*s" has to start with the first! A double album and audio webcomic for "the *Ulysses* of rock albums."`,
                            href: `https://www.yearlingsbobtail.com`,
                            src: bobtailYearlings,
                        }}
                    />
                ),
            ],
        }}
    />
)

export default Component
