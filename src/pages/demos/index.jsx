import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../assets/images/bobtailYearlings.png'

const Component = () => (
    <Page
        {...{
            body: [
                `
# Return of the rock martyrs

**Each band in our registry sacrificed a serious chunk of lifetime— at least 25,000 hours!— to make a demo that advances the art form.**

// TODO: Mention interdependence${'  '}
If you have an offer or opportunity for any of our bands to consider, please contact them directly! There are no commissions involved.
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
