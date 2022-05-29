import React from 'react'
import Page from '../../containers/Page'

const showLegacy = true

const Component = () => (
    <Page
        {...{
            body: `
# The BYCombo mission

**BYCombo is a nonprofit incubator of rock bands. Our mission is to assemble interdependent bands committed to making historically consequential demos, and to be a public registry of this work.**
${showLegacy ? `
### A hundred *Yearling's Bobtail*s

Hi, I'm Bennett. It took me 25,000 hours— twelve full-time years!— to make the album and audio webcomic for *Yearling's Bobtail*. Imagine a hundred other bands putting the same time and energy into an ambitious demo of their own. This would be the next revolution remembered by history!

Yet indie rock isn't set up to notice such efforts. Its gatekeepers are too harried to learn who's out there, so artists vie for their attention by wasting time and energy instead on broken signals, like touring at a loss. Any artist who *doesn't*— the gatekeepers will simply never tell us about.

### Who gatekeeps the gatekeepers?

And this is the heart of the problem:

**Once the gatekeepers start to fail us, there's no way for us to know. Which means they'll be failing us for a long time— if they haven't been *already*.**

But with BYCombo, the public will finally know what the gatekeepers *aren't* showing them! Anyone can now look through BYCombo's public registry to learn about the latest bands trying to make history, whose works necessarily defy what the indie gatekeepers expect.
` : `
### Tools… are *rules*

Indie rock is all about providing artists with tools meant to empower them. These tools require commitment, yet they offer no advantage, since every artist is expected to use them. Instead, they simply disadvantage any who *don't*. But if you think about it… this is exactly how *rules* work!

Indie rock, in other words, is a culture of, by, and for the people who love rules. Which is great for them. But what about anyone else?

### A hundred *Yearling's Bobtail*s

Hi, I'm Bennett. I personally hate rules— but if everyone felt the same, then breaking rules would be the new rule! So I understand why my attitude puts me at a disadvantage, which then has to be overcome by other means. This is why I spent 25,000 hours— twelve full-time years!— to make the album and audio webcomic for *Yearling's Bobtail*.

Now, rule breakers like me aren't common— but we're also not rare! Imagine a hundred other bands putting the same time and energy into an ambitious demo of their own. It would be the next revolution! And we all *want* this to happen. So why hasn't it?

### Who gatekeeps the gatekeepers?

Yet indie rock isn't set up to notice such efforts. Its gatekeepers are too harried to learn who's out there, so artists vie for their attention by wasting time and energy instead on broken signals, like touring at a loss. Any artist who *doesn't*— the gatekeepers will simply never tell us about. And this is the heart of the problem:

**Once the gatekeepers start to fail us, there's no way for us to know. Which means they'll be failing us for a long time— if they haven't been *already*.**

But with BYCombo, the public will finally know what the gatekeepers *aren't* showing them! Anyone can now look through BYCombo's public registry to learn about the latest bands trying to make history, whose works necessarily defy what the indie gatekeepers expect.

BYCombo gives rule breakers a chance to be heard, for the first time in the 21st century!
`}

### Who we're looking for

BYCombo is open to any artist who's ready to sacrifice a chunk of their lifetime to join the interdependence revolution— the next movement in history after indie rock! You're also one of the following:

* A rock musician— singer, guitarist, drummer…
* A musician of another stripe— cellist, tabla player…
* An artist of some other medium— dancer, web developer…
* An entrepreneur with a bold vision for a musical project

We'll put you in a band with three or four others of equal talent, subject to everyone's approval. You'll then relocate with your band to Los Angeles or another US city. Once the band project is decided, you'll each put in enough time for the sum total to be at least 25,000 hours. With four bandmates, this works out to forty hours a week for three years.

### What we'll do for you

Through the years, BYCombo will advise you on your project and include you in a supportive community of other ambitious bands. The Bobtail Yearlings will also help when they can!

Once your demo is complete, we'll send it to any record labels or music industry insiders who sign up to hear it first. In exchange for this privilege, they'll promise to give it fair consideration and a timely response.

Finally, we'll add your demo to our public registry. With your help, BYCombo will become the public's trusted source to hear about the latest bands putting in at least 25,000 hours to make history!
            `,
        }}
    />
)

export default Component
