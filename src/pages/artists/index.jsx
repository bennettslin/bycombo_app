import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
# Join the interdependence revolution!

As an artist, do you sense that everything about rock today is *backward*? Why do the indie gatekeepers force you to waste so much time and energy on their tools? This *can't* be what the public wants, nor what matters to history… Well, you're *not* crazy: The system *is* broken— and here's how we'll fix it!

**To join a BYCombo band, artists must pledge *not* to use indie rock's tools. Instead, they'll earn the trust of future business partners by sacrificing a serious chunk of lifetime to advance the art form.**

### Who we're looking for

${'  ' || `
// TODO: Must be driven.
`}

Anyone of legal age is welcome to apply. But ideally, you should already have some life experience under your belt! You're also reasonably skilled in one or more of the following roles:

* A rock musician: singer, guitarist, drummer…
* A musician of any other stripe: composer, tabla player…
* An artist of some other medium: dancer, web developer…

**Women, minorities, and members of other disadvantaged groups are encouraged to apply!**

As a rock movement *started* by a minority, BYCombo was *conceived* to give disadvantaged artists the interdependence they crave and thrive on.

### How you'll form a band

If we accept you, we'll set you up with prospective bandmates who match your artistic tastes and skill levels. We also recognize the importance of gender diversity, and we'll strive for an equitable ratio in every band.

Upon reviewing each other's links and videos, you'll meet online. If everyone agrees to form a band, you'll all relocate to Los Angeles, or another major city of your band's choosing. Once settled in, each of you will put in enough time on your band project for the sum total to be at least 25,000 hours.

### What we'll do for you

${'  ' || `
// TODO: Mention partner once partner page is done.
`}

BYCombo will provide a forum for you and the others in your cohort to befriend each other, and we'll periodically advise you on your band project. We also encourage every alum to pay it forward and collaborate with our bands in the next cohort!

Once your demo is complete, we'll add it to our public registry and notify everyone on our mailing list. Over time, each new BYCombo band will raise awareness of our mission, boosting your own chances to get heard. Of course, we're just getting started, so to thank you for your patience during these early years:

**The Bobtail Yearlings will invite up to ten bands from our pilot cohort to feature as guest artists on their next project— an album about the life of English biochemist Rosalind Franklin!**

### How to apply

${'  ' || `
// TODO: This needs to be a Google Form instead.
`}

Email us the following information, and we'll be in touch:

* Your name, email address, and pronouns
* Your city, and where you can relocate, if not Los Angeles
* Your musical and aesthetic preferences— or dealbreakers
* Your artistic talents and corresponding skill levels
* Your bold ideas for a musical project, if any
* Links to social media or video demonstrations

If you're co-applying with one or more bandmates, please send a single email with each person's information. If you have special circumstances that need to be considered, please let us know. We'll see if we can make things work.

And remember, as a nonprofit, BYCombo will *never* charge fees or take a cut of your earnings. If *you're* ready to join the interdependence revolution, then *we're* here to serve you!
            `,
        }}
    />
)

export default Component
