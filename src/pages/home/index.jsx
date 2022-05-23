import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            body: `
# The BYCombo mission

// TODO: Make more eloquent${'  '}
**BYCombo is a nonprofit incubator of rock bands. Our mission is to assemble interdependent bands committed to making historically consequential demos, and to be a public registry of these demos.**

### "A thousand *Yearling's Bobtail*s"

Hi, I'm Bennett. It took me 25,000 hours— twelve full-time years!— to make the album and audio webcomic for *Yearling's Bobtail*. Imagine a thousand bands putting the same time and energy into an ambitious demo of their own. This would be the next revolution remembered by history!

Yet indie rock isn't set up to notice such efforts. Its gatekeepers are too harried to learn who's out there, so artists vie for their attention by wasting time and energy on broken signals— like touring at a loss. Any artist who *doesn't*, the gatekeepers will simply never tell us about.

### Policing the gatekeepers

And this is the heart of the problem.

**Once the gatekeepers start to fail us, there's no way for us to know. Which means they'll be failing us for a long time— if they haven't been *already*.**

// TODO: Policing the gatekeepers${'  '}
But BYCombo fixes this problem. By providing a registry by allowing the public to evaluate the gatekeepers!

### Who we're looking for

BYCombo is open to any artist who's ready to sacrifice a chunk of their lifetime to join the interdependence revolution! You're also one of the following:

* A creator with a bold idea for a musical project
* A rock musician— singer, guitarist, drummer…
* A musician of another stripe— cellist, tabla player…
* An artist of some other medium— novelist, web developer…

If we accept you, we'll put you in a band with three or four others of equal talent, subject to everyone's approval. You'll then relocate with your band to Los Angeles or another US city. Once the band project is decided, you'll each put enough time into it for the sum total to be 25,000 hours. With four bandmates, this works out to forty hours a week for three years.

### What we'll do for you

Through the years, BYCombo will advise you on your project and include you in a supportive community of other ambitious bands. The Bobtail Yearlings will also help when they can!

Once your demo is complete, we'll send it to any record labels or music industry insiders who sign up to hear it first. In exchange for this privilege, they'll promise to give it fair consideration and a timely response.

Finally, we'll add your demo to our registry. With your help, BYCombo will become the public's trusted source to hear about all the bands out there putting in 25,000 hours to make history!
            `,
        }}
    />
)

export default Component
