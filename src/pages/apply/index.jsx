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
* A list of your talents and skill levels
* Your bold ideas for a project, if any
* Your artistic and musical preferences
* Any links to social media or videos that you like
* Suggestions to improve BYCombo, if any

Women and minorities are encouraged to apply!
            `,
        }}
    />
)

export default Component
