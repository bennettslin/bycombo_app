import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"like indie labels"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> [R]ecord labels are now offering very flexible terms to TikTok stars. I hear that royalty rates of 50% are now possible, and even future ownership of the master recordings.

> Labels aren't doing this because they suddenly decided to be generous. They are sweetening deals because they have nothing else to offer. They are trying to sign artists who absolutely don't need a record label— because [these artists] have already gone viral and are making money as indie operators.

Gioia, Ted. "[Nine Predictions for the Future of the Music Business.](https://www.honest-broker.com/p/nine-predictions-for-the-future-of)" *The Honest Broker*, October 2024.
            `,
        }}
    />
)

export default Component
