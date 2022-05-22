import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Join the interdependence revolution!

Make history by being part of our pilot cohort! Send us the following, and we'll be in touch shortly:

* Your name and pronouns
* Your current city, and where you can relocate
* Your artistic and musical preferences
* Your talents and corresponding skill levels
* Your bold ideas for a musical project, if any
* Links to social media or video demonstrations

If you wish to co-apply with other artists or a full band, let us know and we'll try to make things work. Women and minorities are also highly encouraged!
            `,
        }}
    />
)

export default Component
