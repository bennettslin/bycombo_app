import React from 'react'
import Page from '../../containers/Page'

const TITLE = `Be a martyr for interdependence!`
const DESCRIPTION = `Sacrifice a serious chunk of lifetime to advance the art form.`

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
As an artist, do you sense that the indie camp has it all *backward*? Why do they force you to waste so much time and energy using online tools meant to empower you? Back when rock was interdependent, self-empowerment just came for free, once you'd built up enough talents.

Furthermore, the only measure of empowerment is the size of an artist's fanbase. But the easiest way to gain fans here and now is to create *content*— which has no lasting value for *future* audiences. So if *you* plan to make art that lasts… you'll end up the biggest loser. Fortunately, with BYCombo, you can aim for the historical canon once more! Here's how:

**To join BYCombo as an artist, you must pledge *not* to empower yourself. Instead, your band will gain exposure through business partners, whose trust you'll earn by sacrificing a serious chunk of lifetime.**

### Who we're looking for

Are you eager to make history by advancing the art form? Are you ready to join an assembled band whose members get equal credit and royalties? And are you able to devote at least forty hours each week to your band project— which likely means [quitting social media](/indie#scarcity-inspires-generational-courage)?

Most importantly, are you willing to defy indie rock's gatekeepers— its labels, curators, and pundits — even as they have the power to shut you out forever? That is to say, do you understand that, after sacrificing a serious chunk of your lifetime, you may be left with nothing to show but the work you've done, the talents you've built, and the friends you've made?

If so, then come be part of the interdependence revolution! We're looking for those who are reasonably skilled in one or more of the following roles:

* A rock musician: singer, guitarist, drummer…
* A musician of any other stripe: composer, tabla player…
* An artist of some other medium: cartoonist, web developer…

### How you'll form a band

We'll select each applicant based on their talents, creative ideas, and how we perceive their character. If we accept you, we'll set you up with three or four prospective bandmates who match your artistic tastes and skill levels. Upon reviewing each other's links and videos, you'll meet online.

Once everyone agrees to form a band, those who can relocate to the same city will do so. For our pilot cohort, this will be Los Angeles, as we'd like to meet with you in person. Upon settling in, each of you will then put in enough time on your band project for the sum total to be 25,000 hours.

### A lifetime of band projects

BYCombo will advise you on your band project, and we'll provide a forum for you to befriend the other bands in your cohort. Once your demo is complete, we'll expose you to business partners by adding it to our public registry and including it in our latest newsletter. As an alum, you'll also have a chance to pay it forward and work with the next cohort.

And for your next band project, we want you to set the bar even higher! So if you need additional bandmates, you'll be given priority to choose from our latest applicants. We also encourage you to join another BYCombo band if that's a better fit for you. Remember, cross-pollination benefits everyone, and every BYCombo band is family!

Of course, we're just getting started, so to thank you for your patience during these early years:

**The Bobtail Yearlings will invite up to ten bands from our pilot cohort to feature as guest artists on their next project— an album about the life of English biochemist Rosalind Franklin!**

### On diversity and inclusion

**Women, minorities, and other disadvantaged groups:**

As a rock movement started by [a minority](/indie#hungry-outsiders-aim-for-the-canon), BYCombo was *conceived* to give you the interdependence you crave and [thrive on](/indie#interdependence-guards-against-prejudice)! We'll also aim for an equitable gender ratio in every band we assemble.

**Artists of other mediums:**

One final frontier in the arts is for bands to explore [new combinations](/indie#progress-tracks-aesthetics-not-logistics) of different mediums. Which means you play a crucial role in bringing forth this century's canonical works!

**International artists:**

To revive the canon, we need you to [*join* us](/indie#cultural-chauvinism-can-only-be-justified)! In the future, we hope to sponsor you for a U.S. visa. But for now, your cohort will work together to find shared solutions to common problems faced by all multinational bands.

### How to apply

${'  ' || `
// TODO: This will be in a Google Form instead.

Anyone of legal age is welcome to apply.

Must read "the problem with indie rock" in its entirety and agree with most of it.
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
