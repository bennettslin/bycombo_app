import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"behave like"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> 1. Record labels have lost their ability to launch new careers.

> 2. Like Bartleby the scrivener, they really prefer not to deal with this whole issue because career development is such a hassle.

> 3. So they demand that musicians build their own audience via TikTok and other social media platforms.

> 4. But the moment musicians become capable of doing this, they don't need record labels anymore.

Gioia, Ted. "[Record Labels Dig Their Own Grave. And the Shovel is Called TikTok.](https://www.honest-broker.com/p/record-labels-dig-their-own-grave)" *The Honest Broker*, June 2022.
            `,
        }}
    />
)

export default Component
