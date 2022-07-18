import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Support the interdependence revolution!

If you're an industry insider who'd like to be among the first to hear every demo, please get in touch! In exchange for this privilege, you'll promise to give each one fair consideration and a timely response.

If you'd like to work for BYCombo in an administrative role, let us know what you have in mind. We're happy to get all the help we can!

Please let us know if you have any questions, or if you have suggestions for how we can improve. Thanks!
            `,
        }}
    />
)

export default Component
