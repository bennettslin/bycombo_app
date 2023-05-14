import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../content/registry/2023/bobtail-yearlings/yearlings-bobtail'

const Component = () => (
    <Page
        {...{
            body: [
                `
# Return of the rock martyrs… and *saviors*!

**To earn the listener's trust, each band in this public registry sacrificed a serious chunk of lifetime— 25,000 hours, or twelve full-time years— to make a demo that advances the art form.**

But remember, our bands are required to *ignore* indie rock's tools— which means the indie gatekeepers will dismiss them as hobbyists. So if rock is to be saved, we need *others* to tell the world about them. Can one of these rock saviors… be you?

If you have an offer or opportunity for any of our bands to consider, please contact them directly!
                `,
                (
                    <DemoLink {...bobtailYearlings} />
                ),
            ],
        }}
    />
)

export default Component
