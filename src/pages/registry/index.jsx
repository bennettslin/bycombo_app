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

${'  ' || `
// TODO: Really get into listener trust.
`}

**To earn your trust as a listener, each band listed here sacrificed a serious chunk of lifetime— at least 25,000 hours, or twelve full-time years— on a demo that advances the art form.**

But remember, the indie gatekeepers will *ignore* these demos. So if rock is to be saved, we need *others* to tell the world about our bands. Can one of these rock saviors… be you?

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
