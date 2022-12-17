import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Join the interdependence revolution!

Are you ready to sacrifice a serious chunk of lifetime to make rock history? Join a BYCombo band! Obviously, our process hasn't been tried and tested, so we're assembling a pilot cohort of no more than ten bands to help us work out the kinks. And to thank you for your help:

**The Bobtail Yearlings will invite all the bands from our pilot cohort to feature as guest artists on their next project, an album about the life of English biochemist Rosalind Franklin!**

### Who we're looking for

Perhaps you're one of the following:

* A rock musician: singer, guitarist, drummer…
* A musician of any other stripe: cellist, tabla player…
* An artist of another medium: dancer, web developer…
* An administrator: manager, social media guru…

${'  ' || `
// TODO: Make clear that relocation isn't mandatory.
`}

We'll set you up with prospective bandmates who match your musical preferences and skill levels. You'll review each other's links and videos, then meet online. If everyone agrees to form a band, you'll relocate to Los Angeles or another major city. After you've settled in, each of you will put in enough time on your band project for the sum total to be at least 25,000 hours.

There are no application fees or legal contracts. We'll just ask you to make a nonbinding pledge to be vaccinated, to respect pronouns, and so forth.

### What we'll do for you

BYCombo will provide a forum for you and the other bands in your cohort to support each other, and we'll periodically advise you on your band project. We also encourage every alum to pay it forward and work with our bands in the next cohort!

Once your demo is complete, we'll add it to our registry and notify all the music fans, industry executives, and budding entrepreneurs who've signed up to our mailing list. With your help, BYCombo will become the public's trusted resource to hear about the latest bands sacrificing serious chunks of lifetime to advance the art form!

### Diversity and inclusion policy

**Women, minorities, and all other disadvantaged groups are encouraged to apply!**

As a rock movement *founded* by a minority, BYCombo was *conceived* to give disadvantaged groups the interdependence they naturally thrive under.

### How to apply

Email us the following information, and we'll be in touch:

* Your name, email address, and pronouns
* Your city, and where you can relocate, if not Los Angeles
* Your musical and aesthetic preferences— or dealbreakers
* Your artistic talents and corresponding skill levels
* Your bold ideas for a musical project, if any
* Links to social media or video demonstrations

If you're co-applying with one or more bandmates, please send a single email with each person's information. If you have special circumstances that need to be considered, please let us know! We'll try to make things work.
            `,
        }}
    />
)

export default Component
