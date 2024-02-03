import React from 'react'
import MailingList from '../../components/MailingList'
import Page from '../../containers/Page'

const TITLE = `Join the interdependence revolution!`
const DESCRIPTION = `Come partner with our history-making bands.`

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
// TODO: Segue to bold text.

The Beatles relied on managers from day one; it's how they got their Hamburg gig and their Parlophone audition. So if history's greatest rock band was a paragon of *inter*-dependence… then how good can any *indie*-pendent artist really be?

Every BYCombo band promises to be an ideal partner in interdependence, by sacrificing a serious chunk of lifetime to advance the art form, while remaining powerless 
`}

As an entrepreneur, would you happily partner with today's artists, if only indie rock didn't have it so *backward*? Well, there's good news! The artists trying to make the best art today [*don't* wish](/indie#disintermediation-is-a-middlemans-dream) to be indie; they *do* hope to work with others who can handle their business matters. They just haven't had a way to make themselves known to you… until now!

With BYCombo, you can once again discover the next generation of bands to make history. Here's how:

**To partner with a BYCombo band allows entrepreneurs to partner with interdependent artists who promise to spend *all* their time and energy advancing the art form, in exchange for**

State that they can contact artist directly, and there are no fees.

${'  ' || `
// TODO: Connect this all to the idea that the reader is an entrepreneur.

Scraps:
As an entrepreneur, have you grown tired of indie rock's low barriers to entry? BYCombo's bands will earn your trust by paying a steep *cost* of entry:

If you'd like to be notified when a new demo is added to our public registry, please subscribe to our newsletter!
`}

                `,
                (
                    <MailingList isWide />
                ),
                `
### Band managers as bandmates

${'  ' || `
// TODO: Keep working on this.

First paragraph, second sentence, is a little unclear?

As an entrepreneur interested in the arts,

Make clear that it's a proposal.

I'm trying to attract influencers, so make it less about business acumen and more about… whatever they're proud of.

Read the Brian Epstein book!
`}

If indie artists are never the best, then why are there *any*? Here's a theory: Perhaps the ones who most love to be their own manager… are those who, in the past, would have been resigned to managing *others*. So indie rock *doesn't* help the next Beatles retain their earnings; it lets today's Brian Epsteins enjoy respect— and the spotlight— as artists *themselves*!

As an entrepreneur interested in the arts, maybe you've thought to take this path yourself. After all, what else is there to do, when indie rock only sees *artists* as the heroes, while all others who share in the earnings are *villains*? Why, you can join a counterculture of interdependence, and be *respected* for your business acumen— as a band manager!

But… will you also get to enjoy the spotlight? Yes! With BYCombo, you can be a full-fledged member of the band. As such, you'll be given equal credit and royalties. And while there's no expectation for you to contribute artistically, any time you spend doing so will count toward your band's 25,000 hours.

${'  ' || `
// TODO: Describe plan.

Also revise BY terms in light of the plan.

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
