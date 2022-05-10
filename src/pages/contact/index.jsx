import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Support the interdependence revolution!

If you're a record label or other music industry insider who would like to be in the first round to hear every demo, please get in touch. In exchange, you'll give fair consideration to each demo and respond to the band in a timely manner.

If you'd like to join BYCombo in its current growth stage, let us know what role you have in mind. We're happy to get all the help we can!

PLease let us know if you have any questions, or suggestions to improve BYCombo. We'd also love to hear from anyone with an offer or opportunity for us to consider. Thanks!
            `,
        }}
    />
)

export default Component
