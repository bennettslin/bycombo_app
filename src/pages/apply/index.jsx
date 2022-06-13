import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Join the interdependence revolution!

**Women and minorities are highly encouraged to apply!**

### Who we're looking for

Are you eager to sacrifice a serious chunk of lifetime to make rock history? Be part of our pilot cohort! Perhaps you're one of the following:

* A rock musician: singer, guitarist, drummer…
* A musician of another stripe: cellist, tabla player…
* An artist of some other medium: dancer, web developer…
* A creator with a bold vision for a musical project

Once we put you in a band with three or four others— subject to everyone's approval— you'll all relocate to Los Angeles or another major city. Each of you will then put in enough time on your band project for the sum total to be 25,000 hours.

### What we'll do for you

BYCombo will include you in a supportive community of other ambitious bands. Through the years, we'll advise you on your band project. The Bobtail Yearlings will also help where they can!

Once your demo is complete, we'll send it to any record labels or industry insiders who sign up to hear it first. In exchange for this privilege, they'll promise to give it fair consideration and a timely response.

Finally, we'll add your demo to our public registry. With your help, BYCombo will become the public's trusted resource to hear about all the latest bands sacrificing serious chunks of lifetime to make history!

### How to apply

Email us the following information, and we'll be in touch:

* Your name, email, and pronouns
* Your city, and where you can— or can't— relocate if needed
* Your musical and aesthetic preferences— or dealbreakers
* Your artistic talents and corresponding skill levels
* Your bold ideas for a musical project, if any
* Links to social media or video demonstrations
// TODO: Best version or different${'  '}

If you're co-applying with others, please send a single email with each person's information. If you have special circumstances that need to be considered, please let us know! We'll try to make things work.
            `,
        }}
    />
)

export default Component
