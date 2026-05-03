import React from 'react'
import Page from '../../../containers/Page'

const TITLE = `"lends authenticity"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> *The guy who recorded an album alone in the woods.* This line might end up on Justin Vernon's tombstone. There's something irresistible about the thought of a bearded dude from small-town Wisconsin retreating, heartbroken, to a cabin to write some songs […] These days, Vernon is more likely to poke fun at the image, but it endures because it fulfils a fantasy for us as listeners.

Richardson, Mark. "[*Bon Iver*, Bon Iver.](https://pitchfork.com/reviews/albums/15551-bon-iver)" *Pitchfork*, June 2011.
            `,
        }}
    />
)

export default Component
