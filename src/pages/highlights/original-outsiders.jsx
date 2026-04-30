import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"original outsiders"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> There's an age-old maxim in the Black community: You've got to be twice as good to get half as far.

Obama, Michelle. "[Quotable Quote.](https://www.goodreads.com/quotes/9648466-you-ve-got-to-be-twice-as-good-to-get-half)" *Goodreads*, accessed April 2026.
            `,
        }}
    />
)

export default Component
