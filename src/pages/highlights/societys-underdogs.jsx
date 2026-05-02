import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"society's underdogs"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> For a few days it looked as if they'd be beaten to the top slot by Michael Jackson's posthumous album "Xscape." The idea of being outdone by a pop star who was no longer living frustrated Carney at the time.

> "For me, it was like the underdog band from Akron trying to accomplish this," he told me. "That's where it came from." But his perspective has softened somewhat. "We were up against Michael Jackson's estate. But really what we're up against is, like, the dude from Gary, Indiana, who once had the same aspirations we did."

Abdurraqib, Hanif. "[Are the Black Keys Still Underdogs?](https://www.nytimes.com/2021/05/26/magazine/black-keys-blues.html)" *New York Times*, May 2021.
            `,
        }}
    />
)

export default Component
