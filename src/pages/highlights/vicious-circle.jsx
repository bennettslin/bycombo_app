import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"vicious circle"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> Steve Jobs has a saying that A players hire A players. But B players hire C players, and C players hire D players. It doesn't take long to get to F players. This trickle-down effect causes bozo explosions in companies.

Kawasaki, Guy. "[Quotable Quote.](https://www.goodreads.com/quotes/391717-steve-jobs-has-a-saying-that-a-players-hire-a)" *Goodreads*, accessed April 2026.
            `,
        }}
    />
)

export default Component
