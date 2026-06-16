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

Maybe structure first paragraph more like second paragraph? So, having to do with "living on"? Avoid talk of nature versus nurture?
`}

Whether intellect comes from nature or nurture… what's the fate of a world in which idiots have the most children, who both inherit their genes and are raised by them? The movie [*Idiocracy*](https://en.wikipedia.org/wiki/Idiocracy) offers one answer: Its main character— an average Joe in our own times— is placed in hibernation and wakes up five hundred years later, only to discover he's now the smartest person alive.

Likewise, in an "indiefied" world, success goes to those who divert the most effort toward *getting* the job, away from simply *deserving* it— and it's their works that'll then live on to inspire the next generation. So what's *our* fate? We could explore this answer in a movie as well… except, of course, instead of a fictional comedy, it'd simply be a documentary of our times.
            `,
        }}
    />
)

export default Component
