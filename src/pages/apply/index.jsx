import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Join the interdependence revolution!

// TODO: Adjust all${'  '}
### Who we're looking for

BYCombo is open to any artist eager to sacrifice a serious chunk of lifetime for the interdependence revolution! You're also one of the following:

* A rock musician— singer, guitarist, drummer…
* A musician of another stripe— cellist, tabla player…
* An artist of some other medium— dancer, web developer…
* A creator with a bold vision for a musical project

Once we put you in a band with three or four others— subject to everyone's approval— you'll all relocate to Los Angeles or another major city. Each of you will then put in enough time on your band project for the sum total to be 25,000 hours.

### What we'll do for you

Through the years, BYCombo will advise you on your band project. If the project requires unique collaborators— acrobats? puppeteers?— we'll help you find them. We'll also include you in a supportive community of other ambitious bands. And finally, the Bobtail Yearlings will help when they can!

// TODO: Include writers and gadflies${'  '}
Once your demo is complete, we'll send it to any record labels or industry insiders who sign up to hear it first. In exchange for this privilege, they'll promise to give it fair consideration and a timely response.

Finally, we'll add your demo to our public registry. With your help, BYCombo will become the public's trusted resource to hear about all the latest bands sacrificing serious chunks of lifetime to make history!

Are you eager to make rock history by sacrificing a serious chunk of lifetime? Be part of our pilot cohort! Email us the following information, and we'll be in touch shortly:

* Your name, email, and pronouns
* Your city, and where you can (or can't) relocate if needed
* Your musical and aesthetic preferences (or dealbreakers)
* Your artistic talents and corresponding skill levels
* Your bold ideas for a musical project, if any
* Links to social media or video demonstrations

If you're co-applying with others, please send a single email with each person's information. If you have special circumstances that you'd like us to consider, please let us know! We'll do our best to make things work.

Women and minorities are highly encouraged!
            `,
        }}
    />
)

export default Component
