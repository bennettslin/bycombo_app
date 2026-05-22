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
> The system wants you to equate tedious work with neutered slavery, and […] liberation with sexy drama, because it knows the opposite is true— that, if you restrict yourself to flashy and dramatic solutions, then you'll [pose no more of a threat] to the status quo than any […] sedentary daydreamer.

> There's a reason the system has no problem feeding you a steady stream of fantasies about violently overthrowing it.

> The reality is, the amount of focus and desire required to blow up the occasional building or pipeline is nothing compared to the lifetime of quiet labor required to understand the system well enough to […] build a better one.

Pargin, Jason. "[Is Modern Mass Media a Mind Prison?](https://jasonpargin.substack.com/p/is-modern-mass-media-a-mind-prison)" *Jason Pargin's Newsletter*, March 2024.
            `,
        }}
    />
)

export default Component
