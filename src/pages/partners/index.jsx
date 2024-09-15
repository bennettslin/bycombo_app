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
As an entrepreneur, would you love to partner with today's artists— if only they didn't waste so much time and energy on the *hustle*? The Beatles relied on managers from [day one](https://en.wikipedia.org/wiki/Allan_Williams), allowing them to focus entirely on the *craft*. And if history's greatest rock band was a paragon of *inter*-dependence… then how good can any *indie*-pendent artist ever be?

Well, there's good news! The artists trying to make the best art today *don't* wish to be indie; they *do* [want others](/indie#disintermediation-is-a-middlemans-dream) to handle the business side of things. They just haven't had a way to earn your confidence… until now. Because BYCombo lets entrepreneurs like you partner with history-making bands once more! Here's how:

**Each BYCombo band promises to put *all* their efforts into advancing the art form, for a serious chunk of lifetime— while remaining dependent on *you*, their business partner, to be made known to the public.**

To hear the latest demos from our bands, you can sign up for the newsletter or visit our public registry. And remember, you're free to contact any one of them directly; there are no fees whatsoever!

${'  ' || `
// TODO: New section. Eventually add Pareto promise here.
`}
            `,
        }}
    />
)

export default Component
