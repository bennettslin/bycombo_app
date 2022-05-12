import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Support the interdependence revolution!

If you're a record label or some other industry insider who'd like to be among the first to hear every demo, please get in touch! In exchange, we'll ask you to give fair consideration to each demo, and then respond to the band in a timely manner.

If you'd like to work for BYCombo in an administrative role, let us know what you have in mind. We're happy to get all the help we can! We'd also love to hear from anyone with an offer or opportunity for us to consider.

Please let us know if you have any questions, or if you have suggestions for improvement. Thanks!
            `,
        }}
    />
)

export default Component
