import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Support the interdependence revolution!

If you're a music fan or industry insider who's grown frustrated with indie rock's low barriers to entry, then BYCombo is here to win your trust! We'll do so by enforcing a steep *cost* of entry:

**BYCombo's registry only includes those bands who've sacrificed at least 25,000 hours— that's twelve years working full time!— on a demo that advances the art form.**

If you'd like to be notified when a new demo is added to our registry, please join our mailing list!

### We'd love your help

If you'd like to work for BYCombo in a paid administrative role, let us know what you have in mind. We're happy to get all the help we can!

Feel free to ask any questions, and we'll answer them in a future FAQ page. We'd also love to hear suggestions for how we can improve. Thanks!
            `,
        }}
    />
)

export default Component
