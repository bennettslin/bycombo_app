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
Who's *really* out there? Where are the bands sacrificing solid chunks of lifetime for the betterment of rock music? The ones who *don't* waste time and energy on broken signals to vie for indie rock's attention? Thanks to BYCombo, you can find their demos here!
                `,
                (
                    <DemoLink
                        {...{
                            band: `Bobtail Yearlings`,
                            title: `Yearling's Bobtail`,
                            description: `"A thousand *Yearling's Bobtail*s" has to start with the first! A double album and audio webcomic for "The *Ulysses* of Rock Albums."`,
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
