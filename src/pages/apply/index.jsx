import React from 'react'
import Page from '../../containers/Page'

const TITLE = `Join the interdependence revolution!`
const DESCRIPTION = `Sacrifice a serious chunk of lifetime to advance the art form.`

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
As an artist, do you sense that the indie camp has it *backward*? Why do they force you to waste so much effort on hustling to get yourself known— all in the name of self-empowerment? Back when rock was interdependent, being empowered just came for free, once you'd built up enough talents.

Furthermore, the only measure trusted by the indie tastemakers is the size of your fanbase. But the surest way to gain the most fans, here and now, is to create *content*— which has no lasting value for *future* audiences. Fortunately, BYCombo lets you aim for the historical canon once more! Here's how:

**To join BYCombo as an artist, you must pledge *not* to get yourself known. Instead, your band will be *made* known, by partners, whose trust you'll earn by sacrificing a serious chunk of lifetime to advance the art form.**

### Who we're looking for

Are you eager to be remembered by future generations? Are you willing to join an assembled band whose members get equal credit and royalties? And are you able to devote at least forty hours each week to your band project?

Most importantly, are you ready to defy the indie tastemakers, even as they have the power to shut you out for good? In other words, do you understand that, after sacrificing a serious chunk of lifetime, you might *still* be denied amnesty— leaving you with nothing but the work you've done, the talents you've built, and the friends you've made?

If so, then come be part of the interdependence revolution! We're looking for those who are reasonably skilled in one or more of the following roles:

* A rock musician: singer, guitarist, drummer…
* A musician of any other stripe: composer, tabla player…
* An artist of some other medium: playwright, web developer…

### How you'll form a band

We'll select each applicant based on their talents and creative ideas. If we accept you, we'll set you up with three or four prospective bandmates who match your artistic tastes and skill levels. Upon reviewing each other's links and videos, you'll meet online.

Once everyone agrees to form a band, those who can relocate to the same city will do so. For our pilot cohort, this will be Los Angeles, as we'd like to meet with you in person. Upon settling in, each of you will then put in enough time on your band project for the sum total to be 25,000 hours.

### A lifetime of band projects

BYCombo will advise you on your band project, and we'll provide a forum for you to befriend the other bands in your cohort. Once your demo is complete, we'll expose you to potential partners by adding it to our demo registry and including it in our latest newsletter. As an alum, you'll also have a chance to "pay it forward" and work with the next cohort.

And for your next band project, we want you to set the bar even *higher*! So if you need additional bandmates, you'll be given priority to choose from our latest applicants. We also encourage you to join another BYCombo band if that's a better fit for you. Remember, cross-pollination benefits everyone, and every BYCombo band is family!

Of course, we're just getting started, so to thank you for your patience during these early years:

**The Bobtail Yearlings will invite up to ten bands from our pilot cohort to feature as guest artists on their next project— an album about the life of English biochemist Rosalind Franklin!**

### On diversity and inclusion

**Women, minorities, and other disadvantaged groups:**

As a rock movement started by a minority, BYCombo was *conceived* to win back the interdependence you thrive upon! We'll also aim for an equitable ratio of gender and economic class in every band we assemble.

**Artists of other mediums:**

One last frontier in the arts is for bands to explore new combinations of different mediums. Which means you play a crucial role in bringing forth this century's canonical works!

**International artists:**

To restore the historical canon, we need you to *join* us! In the future, we hope to sponsor you for a U.S. visa; for now, we'll do our best to help with whatever issues you might face.

### How to apply

${'  ' || `
// TODO: Review section.
`}

Email us the following information:

- Your name, contact info, and city of residence.
- Your artistic talents and aesthetic preferences.
- Whom you're co-applying with, if anyone.

We'll also need each of the following:

- A statement that you're of legal age: eighteen years or older.
- Your gender. (This will *only* determine whom you'll be placed in a band with; it *won't* affect your chances of being accepted.)
- Total hours you spend every week to earn a living, including commute time. We'll use this as a proxy for your economic class. (Same condition as above.)
- Whether you're able and willing to relocate to Los Angeles, for anyone who isn't here already. (If not, you won't be eligible for the pilot cohort, but we'll keep you on file for later ones.)
- An acknowledgment that you've read "[The problem with indie rock](/indie)" in its entirety. (You don't have to agree with all of it; we just need to know that you understand what drives the BYCombo mission.)

Feel free to include any of the following as well:

- Your bold ideas for a musical project. (If you're nervous about revealing them, you can trust Bennett's experience with "doublespeaker rhyme": No one even *wants* to steal them— especially if they're labor-intensive.)
- Links to social media or video demonstrations.
- Other circumstances you'd like us to consider.

And remember, as a nonprofit, BYCombo will *never* charge any fees or take a cut of your earnings. If *you're* ready to self-sacrifice for art's sake, then *we're* here to serve *you*!
            `,
        }}
    />
)

export default Component
