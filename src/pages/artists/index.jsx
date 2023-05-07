import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Join the interdependence revolution!

As an artist, do you sense that everything about rock today is *backward*? Why do the indie gatekeepers force you to waste time and energy on their tools, when this isn't what the public wants, nor what matters to history? Well, you're *not* crazy: The system *is* broken— and here's how we'll fix it!

**BYCombo requires its artists to *ignore* indie rock's tools. To earn the trust of discerning fans and future business partners, they must instead sacrifice a serious chunk of lifetime to advance the art form.**

### Who we're looking for

Ideally, you're old enough to have racked up some life experience. You're also highly skilled as one of the following, or reasonably skilled as two or more:

* A rock musician: singer, guitarist, drummer…
* A musician of any other stripe: composer, tabla player…
* An artist of some other medium: dancer, web developer…

**Women, minorities, and all other disadvantaged groups are encouraged to apply!**

As a rock movement *started* by a minority, BYCombo was *conceived* to give disadvantaged groups the interdependence they naturally thrive under.

### How you'll form a band

We'll set you up with prospective bandmates who match your artistic tastes and skill levels. Our ideal is to achieve gender balance within each band.

Upon reviewing each other's links and videos, you'll meet online. If everyone agrees to form a band, you'll all relocate to Los Angeles, or another major city. After you've settled in, each of you will put in enough time on your band project for the sum total to be at least 25,000 hours.

### What we'll do for you

${'  ' || `
// TODO: Mention partner. Make mailing list statement better.
`}

BYCombo will provide a forum for your band and the others in your cohort to support each other, and we'll periodically advise you on your band project. We also encourage every alum to pay it forward and work with bands in the next cohort!

Once your demo is complete, we'll add it to our registry and notify all the music fans, industry executives, and budding entrepreneurs who've signed up to our mailing list.

As a nonprofit, BYCombo will never charge a fee or take a cut of your earnings. And obviously, we're just getting started, so to thank you for helping us work out any kinks:

**The Bobtail Yearlings will invite up to ten bands from our pilot cohort to feature as guest artists on their next project: an album about the life of English biochemist Rosalind Franklin!**

### How to apply

${'  ' || `
// TODO: This will be a Google Form instead.
`}

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
