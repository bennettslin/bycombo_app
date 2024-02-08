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
// TODO:
Finish last paragraph of first section.
`}

As an entrepreneur, would you love to partner with today's artists— if only they didn't waste so much effort on the *hustle*? After all, the Beatles relied on managers from [day one](https://en.wikipedia.org/wiki/Allan_Williams), allowing them to focus entirely on the *craft*. And if history's greatest rock band was a paragon of *inter*-dependence… then how good can any *indie*-pendent artist really be?

Well, there's good news! The artists trying to make the best art today *don't* wish to be indie; they *do* want others to handle the business side of things. They just haven't had a way to make themselves known to you… until now. Because BYCombo's mission is to help entrepreneurs like you partner with history-making bands once more! Here's how:

**Every BYCombo band promises to be an ideal partner by spending *all* their time and energy to make the best art, for serious chunks of lifetime— while being completely dependent on you to get heard by the public.**

Next paragraph:
Demo. Mention newsletter, or just visiting registry directly. State that they can contact artist directly, and there are no fees.
                `,
                (
                    <MailingList isWide />
                ),
                `
### Band managers as bandmates

${'  ' || `
// TODO: Keep working on this.

Make clear that it's a proposal.

I'm trying to attract influencers, so make it less about business acumen and more about… whatever they're proud of. People skills?

Scraps:
If indie artists are never the best, then why are there *any*? Here's a theory: Perhaps the ones who most love to be their own manager… are those who, in the past, would have been resigned to managing *others*. So indie rock *doesn't* help the next Beatles retain their earnings; it lets today's Brian Epsteins enjoy respect— and the spotlight— as artists *themselves*!

Read the Brian Epstein book!

But… will you also get to enjoy the spotlight? Yes! With BYCombo, you can be a full-fledged member of the band. 
`}

Perhaps a moment in the spotlight yourself would be nice— but indie rock only sees artists as the heroes, while all others who share in the earnings are villains. So what's an entrepreneur to do? Become an [artist yourself](/indie#disintermediation-is-a-middlemans-dream)?! Why, you can be valued for your business acumen— as a full-fledged member of the band you manage!

(Explain that this is an experimental proposal). As such, you'll be given equal credit and royalties. And while there's no expectation for you to contribute artistically, any time you spend doing so will count toward your band's 25,000 hours.

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
