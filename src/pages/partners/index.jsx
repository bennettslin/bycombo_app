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
// TODO: Model first paragraph just like Apply page.
`}

As an entrepreneur, do you sense that indie artists have it all *backward*? The Beatles relied on managers from day one; it's how they got their Hamburg gigs and their auditions at Decca and Parlophone. But if history's greatest band is the perfect example of how interdependence makes us greater than the sum of our parts?

Well, you're *not* crazy.

As a budding entrepreneur, have you grown tired of indie rock's low barriers to entry? BYCombo's bands will earn your trust by paying a steep *cost* of entry:

**To be added to our public registry, each band must sacrifice at least 25,000 hours— twelve years working full time!— to make a demo that advances the art form.**

If you'd like to be notified when a new demo is added to our public registry, please subscribe to our newsletter!
                `,
                (
                    <MailingList isWide />
                ),
                `
### Managers as bandmates?

If you'd like to work for BYCombo in a paid administrative role, let us know what you have in mind. We're happy to get all the help we can!

Feel free to ask any questions, and we'll answer them in a future FAQ page. We'd also love to hear suggestions for how we can improve. Thanks!
                `,
            ],
        }}
    />
)

export default Component
