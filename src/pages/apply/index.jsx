import React from 'react'
import Page from '../../containers/Page'

const TITLE = `Join the interdependence revolution!`
const DESCRIPTION = `Sacrifice a serious chunk of lifetime to advance the art form!`

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
# ${TITLE}

As an artist, do you sense that everything about rock today is *backward*? Why do the indie gatekeepers force you to waste so much time and energy caring about self-empowerment and fair compensation? These benefits should just come for free, once you've built up enough talents. Well, you're *not* crazy: The culture *is* broken— and here's how we'll fix it!

**To join BYCombo, artists must pledge *not* to use indie rock's tools. Instead, their band will gain exposure through a partner, whose trust they'll earn by sacrificing a serious chunk of lifetime to advance the art form.**

### Who we're looking for

Anyone of legal age is welcome to apply. You're also reasonably skilled in one or more of the following roles:

* A rock musician: singer, guitarist, drummer…
* A musician of any other stripe: composer, tabla player…
* An artist of some other medium: dancer, web developer…

### On diversity and inclusion

${'  ' || `
// TODO: Move inclusive statement upfront. Mention doing things differently, and how BYCombo bands won't look like traditional bands.
`}

BYCombo welcomes your unique perspectives and talents!

**Women, minorities, and other disadvantaged groups:**

As a rock movement *started* by a minority, BYCombo was *conceived* to give disadvantaged artists the interdependence they crave and thrive on. We'll also strive for an equitable gender ratio in every band.

**International applicants:**

While we're unable to sponsor you for a U.S. visa at this time, you'll join a community of multinational bands who'll work together to find common solutions to the same challenges.

### How you'll form a band

If we accept you, we'll set you up with three or four prospective bandmates who match your artistic tastes and skill levels. Upon reviewing each other's links and videos, you'll meet online.

Once everyone agrees to form a band, the U.S. residents among you will move to the same city. This will be Los Angeles for our pilot cohort, as we'd like to meet with you in person. After settling in, each of you will then put in enough time on your band project for the sum total to be 25,000 hours.

${'  ' || `
// TODO: Mention admin role.
`}

### What we'll do for you

${'  ' || `
// TODO: Encourage cross-pollination.
`}

BYCombo will advise you on your band project, and we'll provide a forum for all the bands in your cohort to support each other. We also encourage alums to pay it forward and work with our bands in the next cohort!

Once your demo is complete, we'll add it to our public registry and include it in the latest newsletter. Over time, each BYCombo band will raise awareness of our mission, boosting your own chances to get heard.

Of course, we're still just getting started, so to thank you for your patience during these early years:

**The Bobtail Yearlings will invite up to ten bands from our pilot cohort to feature as guest artists on their next project— an album about the life of English biochemist Rosalind Franklin!**

### How to apply

${'  ' || `
// TODO: This will be in a Google Form instead.
`}

Email us the following information, and we'll be in touch:

* Your name, email address, and pronouns
* Your city and where you can relocate, if not Los Angeles
* Your musical and aesthetic preferences— or dealbreakers
* Your artistic talents and corresponding skill levels
* Your bold ideas for a musical project, if any
* Links to social media or video demonstrations
* Any other circumstances that need to be considered

If you're co-applying with one or more bandmates, send a single email with each person's information.

And remember, as a nonprofit, BYCombo will *never* charge fees or take a cut of your earnings. If *you're* ready to join the interdependence revolution, then *we're* here to serve you!
            `,
        }}
    />
)

export default Component
