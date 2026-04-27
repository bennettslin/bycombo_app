import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"finally reciprocate"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> One worrying outcome of that research is the discovery that it is very hard to move from the low-trust situation, in which each hunter chases his own rabbits, to the more trusting situation, in which both team up to bring down the stag. Any move to the high-trust equilibrium is going to require its own, possibly costly, attempt at coordination. Perhaps we should not be surprised that trust is difficult to regain once lost.

Harford, Tim. "[The Stag Hunt](https://slate.com/culture/2007/09/the-obscure-game-theory-problem-that-explains-why-rich-countries-are-rich.html)." *Slate*, September 2007.
            `,
        }}
    />
)

export default Component
