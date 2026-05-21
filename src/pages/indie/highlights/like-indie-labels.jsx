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
> I hear that royalty rates of 50% are now possible, [as well as] future ownership of the master recordings. [But] labels aren't doing this because they suddenly decided to be generous; they [simply] have nothing else to offer. They're trying to sign artists [who've] already gone viral and [thus don't need a label deal].

Gioia, Ted. "[Nine Predictions for the Future of the Music Business.](https://www.honest-broker.com/p/nine-predictions-for-the-future-of)" *The Honest Broker*, October 2024.
            `,
        }}
    />
)

export default Component
