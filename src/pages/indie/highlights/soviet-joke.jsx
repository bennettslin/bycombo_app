import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"Soviet joke"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> In the Communist world, the underground joke is often the best index of conditions. "What is Communism?" asks one that has recently been making the rounds.

> "Communism," goes the reply, "is the longest and most painful route from capitalism to capitalism."

Schmemann, Serge. "[In Hope and Dismay, Lenin's Heirs Speak.](https://www.nytimes.com/1989/01/22/world/in-hope-and-dismay-lenin-s-heirs-speak.html)" *New York Times*, January 1989.
            `,
        }}
    />
)

export default Component
