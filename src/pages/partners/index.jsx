import React from 'react'
import MailingList from '../../components/MailingList'
import Page from '../../containers/Page'

const TITLE = `Partner with history-making bands!`
const DESCRIPTION = `Build partnerships with interdependent rock bands!`

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: [
                `
# ${TITLE}

${'  ' || `
// TODO: Model first paragraph just like Apply page.
`}

As an entrepreneur, do you sense that indie rock has it all *backward*? The Beatles relied on a manager from day one; it's how they got their Hamburg gig, as well as their auditions at Decca and Parlophone. Let's face it, history's greatest band is the perfect example of how interdependence makes us greater than the sum of our parts. Why expect greatness to ever come from doing the opposite?

Well, there's good news: The artists who hope to make the best art have *never* aspired to be indie. We just don't hear from them, because without a system that operates interdependently, they have no way be heard. Until now!

${'  ' || `
// TODO: State that they can contact artist directly, and there are no fees.

Scraps:
As a budding entrepreneur, have you grown tired of indie rock's low barriers to entry? BYCombo's bands will earn your trust by paying a steep *cost* of entry:

**To be added to our public registry, each band must sacrifice at least 25,000 hours— twelve years working full time!— to make a demo that advances the art form.**

If you'd like to be notified when a new demo is added to our public registry, please subscribe to our newsletter!
`}

                `,
                (
                    <MailingList isWide />
                ),
                `
### Band managers as bandmates

${'  ' || `
// TODO: Keep working on this. Make clear that it's a proposal.
`}

If indie artists are never the best, then who exactly chooses to be one? Here's a theory: Maybe the ones who most love to be their own manager… are those who, in the past, would have been resigned to managing someone *else*. So indie rock *doesn't* empower the next Beatles to retain their earnings; it lets today's Brian Epsteins enjoy the spotlight as artists *themselves*!

As an entrepreneur, perhaps you've thought to take this path yourself. After all, what else is there to do, when indie rock only sees artists as the heroes, and anyone else who takes a share of the earnings is a villain? Why, you can join a counterculture that promotes interdependence, and be admired and respected *precisely* for your business acumen as a band manager!

But… will you also get to enjoy the spotlight? Yes! With BYCombo, you can be a full-fledged member of the band you'll manage. As such, you'll also be given equal credit and royalties. And while there's no expectation for you to do so, whatever you contribute artistically will count toward your band's 25,000 hours.

${'  ' || `
// TODO: Describe plan.

Scraps:
If you'd like to work for BYCombo in a paid administrative role, let us know what you have in mind. We're happy to get all the help we can!

Feel free to ask any questions, and we'll answer them in a future FAQ page. We'd also love to hear suggestions for how we can improve. Thanks!
`}
                `,
            ],
        }}
    />
)

export default Component
