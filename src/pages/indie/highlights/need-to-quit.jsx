import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"need to quit"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> [Those in charge want] you to equate tedious work with neutered slavery, and […] liberation with sexy drama, because [they know] the opposite [to be] true— [namely,] that if you restrict yourself to flashy and dramatic solutions, then you'll [pose no more of a threat] to the status quo than any […] sedentary daydreamer.

> There's a reason [they have] no problem feeding you a steady stream of fantasies about violently overthrowing [them].

> The reality is, the amount of focus and desire required to blow up the occasional building or pipeline is nothing compared to the lifetime of quiet labor required to understand the system well enough to […] build a better one.

Pargin, Jason. "[Is Modern Mass Media a Mind Prison?](https://jasonpargin.substack.com/p/is-modern-mass-media-a-mind-prison)" *Jason Pargin's Newsletter*, March 2024.
            `,
        }}
    />
)

export default Component
