import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../content/registry/2022/bobtail-yearlings/yearlings-bobtail'

const Component = () => (
    <Page
        {...{
            body: [
                `
# Return of the rock martyrs… and *saviors*!

**To earn your trust as a listener, BYCombo enforces a steep *cost* of entry. Each band in this public registry sacrificed a serious chunk of lifetime— at least 25,000 hours!— to make a demo that advances the art form.**

But remember, indie rock's gatekeepers will *ignore* these demos. So if rock is to be saved as an art form, we need *others* to tell the world about our bands. Can one of these rock saviors… be you?

Please contact any of our bands directly if you have an offer or opportunity for them to consider!
                `,
                (
                    <DemoLink {...bobtailYearlings} />
                ),
            ],
        }}
    />
)

export default Component
