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

Intellect is shaped by both nature and nurture… so what's the fate of a world in which idiots have the most children, who inherit their genes and are also raised by them? The movie [*Idiocracy*](https://en.wikipedia.org/wiki/Idiocracy) offers one answer: Its main character— an average Joe in our own times— is placed in hibernation and wakes up five hundred years later, only to discover he's now the smartest person alive.

Similarly, in an "indiefied" world, success goes to those who divert the most effort toward *getting* the job, away from simply *deserving* it— and it's their works that'll then live on to inspire the next generation. So what's *our* fate? We could explore this answer in a movie as well… except, of course, instead of a fictional comedy, it'd be a documentary of our times.
            `,
        }}
    />
)

export default Component
