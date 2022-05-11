import React from 'react'
import Demo from '../../components/Demo'
import Page from '../../containers/Page'
import bobtailYearlings from '../../assets/images/bobtailYearlings.png'

const Component = () => (
    <Page
        {...{
            body: [
                `
# The new outsider art
Who's *really* out there? Where are all the bands sacrificing solid chunks of lifetime to make history? The bands that indie rock won't tell you about, because they aren't wasting time and energy on broken signals to vie for attention? With BYCombo, you'll never wonder again!
                `,
                (
                    <Demo
                        {...{
                            band: `Bobtail Yearlings`,
                            title: `Yearling's Bobtail`,
                            description: `"A thousand *Yearling's Bobtail*s" has to start with the first! A double album and audio webcomic for "The *Ulysses* of Rock Albums."`,
                            src: bobtailYearlings,
                        }}
                    />
                ),
            ],
        }}
    />
)

export default Component
