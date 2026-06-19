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


What's the fate of an advanced society in which natural selection no longer punishes those with the worst traits, allowing them to live on and reproduce even further? The movie [*Idiocracy*](https://en.wikipedia.org/wiki/Idiocracy) offers a glimpse: Its hero— an average Joe in our own times— is placed in hibernation and wakes up five hundred years later, only to discover he's now the smartest person alive.

Likewise, in an "indiefied" world, success goes to those who divert the most effort toward *getting* the job, away from simply *deserving* it— and it's their works that then live on to influence the next generation. So what's *our* fate? We could explore this answer in a movie as well… except, of course, instead of a fictional comedy, it'd be a documentary of our times.
            `,
        }}
    />
)

export default Component
