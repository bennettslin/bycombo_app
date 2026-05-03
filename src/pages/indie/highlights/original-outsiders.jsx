import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from './constants'

const TITLE = `"original outsiders"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> There's an age-old maxim in the Black community: You've got to be twice as good to get half as far.

Obama, Michelle. "[Quotable Quote.](https://www.goodreads.com/quotes/9648466-you-ve-got-to-be-twice-as-good-to-get-half)" *Goodreads*.
            `,
        }}
    />
)

export default Component
