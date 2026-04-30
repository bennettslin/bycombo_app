import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"founding underclass"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> Oh, these kids and rock and roll— this is just sped up rhythm and blues. I've been doing that forever.

Tharpe, Sister Rosetta. "[Quotable Quote.](https://www.goodreads.com/quotes/12348736-oh-these-kids-and-rock-and-roll-this-is)" *Goodreads*, accessed April 2026.
            `,
        }}
    />
)

export default Component
