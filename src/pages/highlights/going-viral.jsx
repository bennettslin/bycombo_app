import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"going viral"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
"While a lot of bands view the promotional apparatus as a necessary evil, Clap Your Hands Say Yeah prove that it's still possible for a band to get heard, given enough talent and perseverance, without a PR agency or a label. Indie rock has received a much-needed kick in the pants, and we have the rare chance to decide what a band sounds like of our own accord before any agency cooks up and disseminates an opinion for us. Damn, maybe this is how it's supposed to work!"

Howe, Brian. "[*Clap Your Hands Say Yeah*, Clap Your Hands Say Yeah.](https://pitchfork.com/reviews/albums/1811-clap-your-hands-say-yeah)" *Pitchfork*, June 21, 2005.
            `,
        }}
    />
)

export default Component
