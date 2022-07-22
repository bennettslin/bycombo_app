import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Support the interdependence revolution!

If you're a music fan or industry insider who'd like to be notified when we add a new demo to our public registry, please get in touch!

If you'd like to work for BYCombo in a paid administrative role, let us know what you have in mind. We're happy to get all the help we can!

Feel free to ask any questions, and we'll answer them in a future FAQ page. We'd also love to hear suggestions for how we can improve. Thanks!
            `,
        }}
    />
)

export default Component
