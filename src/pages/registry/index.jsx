import React from 'react'
import DemoLink from '../../components/DemoLink'
import Page from '../../containers/Page'
import bobtailYearlings from '../../content/registry/2023/bobtail-yearlings/yearlings-bobtail'

const TITLE = `Return of the rock martyrs… and *saviors*`
const DESCRIPTION = `A public registry of interdependent rock bands.`

const Component = () => (
    <Page
        {...{
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: [
                `
# ${TITLE}

Business partners, discerning listeners, and future historians:

**To earn your trust, each band in BYCombo's public registry sacrificed a serious chunk of lifetime— at least 25,000 hours, or twelve full-time years!— on a demo that advances the art form.**

But remember, our bands aspire to make canonical art for the *future*. So next to those creating content for the *present*, they'll always struggle to gain fans on their own. This means indie rock's gatekeepers— its labels, curators, and pundits— will dismiss them as hobbyists! If rock is to be saved, then, we need *others* to give them a chance. Can one of these rock saviors… be you?

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
