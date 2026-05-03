import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from './constants'

const TITLE = `"need to quit"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> The reality is that the amount of focus and desire required to blow up the occasional building or pipeline is nothing compared to the lifetime of quiet labor required to understand the system well enough to actually build a better one. And that better world, if it arrives, will require the cooperation of some truly unpleasant people, because all of civilization is nothing but truly unpleasant people learning to peacefully cooperate.

Pargin, Jason. "[Is Modern Mass Media a Mind Prison?](https://jasonpargin.substack.com/p/is-modern-mass-media-a-mind-prison)" *Jason Pargin's Newsletter*, March 2024.
            `,
        }}
    />
)

export default Component
