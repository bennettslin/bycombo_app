import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"greatest predictor"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> Many times when I identified as Libertarian, people said to me, "It's just rich white guys that don't want to be told what to do," and I had a zillion answers to that— and now that seems 100 percent accurate.

Grierson, Tim. "[Penn Jillette Wants to Talk It All Out.](https://www.cracked.com/article_40871_penn-jillette-wants-to-talk-it-all-out.html)" *Cracked*, January 2024.
            `,
        }}
    />
)

export default Component
