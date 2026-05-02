import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"privileged artist's"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> So who will help us? Taylor Swift will help us. Musicians have to help themselves. And they can do it— if they have the right leader. At this moment of crisis, you are that person. […]

> And it's not just because you're the most popular musician on the planet. You have also shown your willingness to take on the system. Even better, you have gone to battle against power brokers in the music business— and have won!

Gioia, Ted. "[An Open Letter to Taylor Swift.](https://www.honest-broker.com/p/an-open-letter-to-taylor-swift)" *The Honest Broker*, September 2023.
            `,
        }}
    />
)

export default Component
