import React from 'react'
import Page from '../../../containers/Page'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"indieocracy"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: `
${'  ' || `
// TODO: Review a few more times.
`}

What's the fate of a society in which natural selection no longer weeds out those with the worst traits, allowing them to live on and flood our collective gene pool? The movie [*Idiocracy*](https://en.wikipedia.org/wiki/Idiocracy) offers a glimpse: Its hero— an average Joe in our own times— is placed in hibernation and wakes up five hundred years later, only to discover he's now the smartest person alive.

Likewise, thanks to "indiefication," we no longer weed out those who put less effort into making art, allowing them to flood the arts with their works— and it's these works that'll then live on to influence the next generation. So what's *our* fate? We could explore this answer in a movie as well… except, of course, instead of a fictional comedy, it'd be an earnest documentary of our times.
            `,
        }}
    />
)

export default Component
