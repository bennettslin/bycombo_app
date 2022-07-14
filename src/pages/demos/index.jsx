import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../assets/images/bobtailYearlings.png'

const Component = () => (
    <Page
        {...{
            body: [
                `
# Return of the rock martyrs… *and* saviors!

**Each band in our registry sacrificed a serious chunk of lifetime— at least 25,000 hours!— to make a demo that advances the art form.**

But remember, the indie gatekeepers will ignore these demos; they want artists to follow the rules and build a fanbase instead. So if rock is to be saved as an art form, we need someone *else* to let the world know about our bands. Can *you* be this rock savior?

If you have an offer or opportunity for any of our bands to consider, please contact them directly!
                `,
                (
                    <DemoLink
                        {...{
                            band: `Bobtail Yearlings`,
                            title: `Yearling's Bobtail`,
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
