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
* Your bold ideas for a musical project, if any
* Your artistic and musical preferences
* A list of your talents and corresponding skill levels
* Any relevant links

Women and minorities are encouraged to apply!
            `,
        }}
    />
)

export default Component
