import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"vicious circle"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> Steve Jobs has a saying that A players hire A players. But B players hire C players, and C players hire D players. It doesn't take long to get to F players. This trickle-down effect causes bozo explosions in companies.

Kawasaki, Guy. "[Quotable Quote.](https://www.goodreads.com/quotes/391717-steve-jobs-has-a-saying-that-a-players-hire-a)" *Goodreads*.
            `,
        }}
    />
)

export default Component
