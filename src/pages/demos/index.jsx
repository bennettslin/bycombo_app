import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../assets/images/bobtailYearlings.png'

const Component = () => (
    <Page
        {...{
            body: [
                `
# Return of the rock and roll martyrs

// TODO: Archive${'  '}
Each band on this list aimed for historical consequence by spending 25,000 hours to make a demo that advances the musical art form! Please contact any of them directly if you have an offer or opportunity for them to consider.
                `,
                (
                    <DemoLink
                        {...{
                            band: `Bobtail Yearlings`,
                            title: `Yearling's Bobtail`,
                            description: `"A thousand *Yearling's Bobtail*s" has to start with the first! A double album and audio webcomic for "the *Ulysses* of rock albums."`,
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
