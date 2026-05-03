import React from 'react'
import Page from '../../../containers/Page'

const TITLE = `"the helpers"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> When I was a boy and I would see scary things in the news, my mother would say to me, "Look for the helpers. You will always find people who are helping."

Rogers, Fred. "[Quotable Quote.](https://www.goodreads.com/quotes/12135721-when-i-was-a-boy-and-i-would-see-scary)" *Goodreads*.
            `,
        }}
    />
)

export default Component
