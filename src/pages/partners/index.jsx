import React from 'react'
import MailingList from '../../components/MailingList'
import Page from '../../containers/Page'

const TITLE = `Partner with our history-making bands!`
const DESCRIPTION = `Build partnerships with interdependent rock bands!`

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: [
                `
# ${TITLE}

${'  ' || `
// TODO: Mention administrator, and reasoning. Redo this whole section.
`}

BYCombo is here for every music fan and budding entrepreneur who's grown tired of indie rock's low barriers to entry. Our bands will earn your trust by paying a steep *cost* of entry:

**To be added to BYCombo's registry, each band must sacrifice at least 25,000 hours— twelve years working full time!— to make a demo that advances the art form.**

If you'd like to be notified when a new demo is added to our public registry, please subscribe to our newsletter!
                `,
                (
                    <MailingList isWide />
                ),
                `
### Business partners as bandmates?

If you'd like to work for BYCombo in a paid administrative role, let us know what you have in mind. We're happy to get all the help we can!

Feel free to ask any questions, and we'll answer them in a future FAQ page. We'd also love to hear suggestions for how we can improve. Thanks!
                `,
            ],
        }}
    />
)

export default Component
