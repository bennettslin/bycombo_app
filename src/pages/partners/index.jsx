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
${'  ' || `
// TODO: Review whole page.
`}

As a budding entrepreneur or discerning curator, would you love to partner with today's artists— if only they didn't waste so much time and energy on the *hustle*? The Beatles relied on managers from [day one](https://en.wikipedia.org/wiki/Allan_Williams), allowing them to focus entirely on the *craft*. And if history's greatest rock band was a paragon of *inter*-dependence… then how good can any *indie*-pendent artist be?

Well, there's good news! The artists trying to make the best art today *don't* wish to be indie; they *do* [want others](/indie#disintermediation-is-a-middlemans-dream) to handle the business side of things. It's just that this ideal then forces them to remain unknown to you— or, it *did*. Because now, with BYCombo, you can grant them amnesty! Here's how:

**Every band of ours promises to put *all* their effort into advancing the art form, for a serious chunk of lifetime— while relying solely on partners like you to make them known to the public.**

To hear the latest demos from our bands, you can sign up for the newsletter, or simply visit our demo registry. And remember, you're free to contact any BYCombo band directly; there are no fees whatsoever!
            `,
        }}
    />
)

export default Component
