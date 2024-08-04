import React from 'react'
import Page from '../../containers/Page'

const TITLE = `Join the interdependence revolution!`
const DESCRIPTION = `Come partner with our history-making bands.`

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
As an entrepreneur, would you love to partner with today's artists— if only they didn't waste so much effort on the *hustle*? After all, the Beatles relied on managers from [day one](https://en.wikipedia.org/wiki/Allan_Williams), allowing them to focus entirely on the *craft*. And if history's greatest rock band was a paragon of *inter*-dependence… then how good can any *indie*-pendent artist ever be?

${'  ' || `
// TODO: Review.
`}

Well, there's good news! The artists trying to make the best art today *don't* wish to be indie; they *do* want others to handle the business side of things. They just haven't had a way to gain your confidence… until now. Because BYCombo lets entrepreneurs like you partner with history-making bands once more! Here's how:

${'  ' || `
// TODO: Review.
`}

**Each BYCombo band will sacrifice *all* their time and energy, for a serious chunk of lifetime, on a demo that advances the art form— while remaining dependent on business partners to be made known to the public.**

To hear about our latest demos, you can sign up for the newsletter or visit our public registry. And remember, you're free to contact any of our bands directly; there are no fees whatsoever!
            `,
        }}
    />
)

export default Component
