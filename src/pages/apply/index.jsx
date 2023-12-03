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

As an artist, do you sense that the indie labels have it all *backward*? Why do they force you to waste so much time and energy using online tools meant to empower you? Back when rock was interdependent, self-empowerment just came for free, once you'd built up enough talents. Well, you're *not* crazy: The culture *is* broken— and here's how we'll revolt!

**To join BYCombo as an artist, you must pledge *not* to empower yourself. Instead, your band will gain exposure through business partners, whose trust you'll earn by sacrificing a serious chunk of lifetime.**

### Who we're looking for

Are you eager to advance the art form? Are you willing to join an assembled band whose members get equal credit and royalties? Are you able to devote at least thirty hours each week to your band project? And are you ready to avoid social media for good? If so, we're looking for those who are reasonably skilled in one or more of the following roles:

* A rock musician: singer, guitarist, drummer…
* A musician of any other stripe: composer, tabla player…
* An artist of some other medium: dancer, web developer…

### How you'll form a band

We'll select each applicant based on their talents, creative ideas, and how we perceive their character. If we accept you, we'll set you up with three or four prospective bandmates who match your artistic tastes and skill levels. Upon reviewing each other's links and videos, you'll meet online.

Once everyone agrees to form a band, those who can relocate to the same city will do so. For our pilot cohort, this will be Los Angeles, as we'd like to meet with you in person. Upon settling in, each of you will then put in enough time on your band project for the sum total to be 25,000 hours.

As part of our pilot cohort, you'll also have a chance to opt into our "business partner as bandmate" [experiment](/partners#business-partners-as-bandmates), for which we'll match you with a budding entrepreneur who'll join your band as a full-fledged member. If this setup proves viable, we'll keep offering it to future cohorts.

### A lifetime of band projects

BYCombo will advise you on your band project, and we'll provide a forum for you to befriend the other bands in your cohort. Once your demo is complete, we'll expose you to business partners by adding it to our public registry and including it in our latest newsletter. As an alum, you'll also have a chance to pay it forward and work with the next cohort.

And for your next band project, we want you to set the bar even higher! So if you need additional bandmates, you'll be given priority to choose from our latest applicants. We also encourage you to join another BYCombo band if that's a better fit for you. Remember, cross-pollination benefits everyone, and every BYCombo band is family!

Of course, we're just getting started, so to thank you for your patience during these early years:

**The Bobtail Yearlings will invite up to ten bands from our pilot cohort to feature as guest artists on their next project— an album about the life of English biochemist Rosalind Franklin!**

### On diversity and inclusion

${'  ' || `
// TODO: Mention multidisciplinary here. Move this up behind "What we're looking for."
`}

BYCombo seeks to have representation from all groups, and we welcome artists with remarkable and unique talents from across the world!

**Women and other disadvantaged groups:**

As a rock movement started by a minority, BYCombo was conceived to give disadvantaged artists the interdependence they crave and thrive on. We'll also strive for an equitable gender ratio in every band we assemble.

**International artists:**

While we're unable to sponsor you for a U.S. visa at this time, you'll join a community of multinational bands who'll likely face the same challenges, and who'll work together to find common solutions.

### How to apply

${'  ' || `
// TODO: This will be in a Google Form instead.

Anyone of legal age is welcome to apply.
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

And finally, as a nonprofit, BYCombo will *never* charge any fees or take a cut of your earnings. If *you're* ready to self-sacrifice to advance the art form, then *we're* here to serve *you*!
            `,
        }}
    />
)

export default Component
