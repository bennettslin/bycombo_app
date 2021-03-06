import React from 'react'
import MailingList from '../../components/MailingList'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: [
                `
# Support the interdependence revolution!

BYCombo is here to serve music fans and industry insiders who've grown tired of indie rock's low barriers to entry. We'll earn your trust by enforcing a steep *cost* of entry:

**To be added to BYCombo's registry, bands must sacrifice at least 25,000 hours— that's twelve years working full time!— to make a demo that advances the art form.**

If you'd like to be notified when a new demo is added to our registry, please join our mailing list!
                `,
                (
                    <MailingList isWide />
                ),
                `
### We'd love your help

If you'd like to work for BYCombo in a paid administrative role, let us know what you have in mind. We're happy to get all the help we can!

Feel free to ask any questions, and we'll answer them in a future FAQ page. We'd also love to hear suggestions for how we can improve. Thanks!
                `,
            ],
        }}
    />
)

export default Component
