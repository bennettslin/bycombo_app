import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Join the interdependence revolution!

Are you eager to sacrifice a chunk of your lifetime to make history? Be part of our pilot cohort! Email us the following information, and we'll be in touch shortly:

* Your name, email, and pronouns
* Your city, and where you can (or can't) relocate if needed
* Your musical and aesthetic preferences (or dealbreakers)
* Your artistic talents and corresponding skill levels
* Your bold ideas for a musical project, if any
* Links to social media or video demonstrations

If you're co-applying with others to be placed in the same band, please send a single email with each person's information. We'll do our best to make it work.

Women and minorities are highly encouraged!
            `,
        }}
    />
)

export default Component
