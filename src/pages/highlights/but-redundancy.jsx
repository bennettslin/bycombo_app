import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"but redundancy"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> Optimizing for efficiency often comes with a tradeoff: less resilience and reduced ability to adapt to uncertain, fluctuating conditions. At a moment when the world is changing faster than ever before, banking on a system that is tailor-made to break down in the face of the uncertain and the unexpected is a terrible bet for humanity.

Klaas, Brian. "[Against Optimization.](https://www.forkingpaths.co/p/against-optimization)" *The Garden of Forking Paths*, January 2025.
            `,
        }}
    />
)

export default Component
