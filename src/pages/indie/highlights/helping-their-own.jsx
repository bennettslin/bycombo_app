import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"helping their own"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> Whites don't have to do bad things to minority groups in order to maintain a racial advantage in employment and wealth. They only have to do good things for one another. And they do good things for one another all the time.

DiTomaso, Nancy. "[White People Do Good Things for One Another, and That's Bad for Hiring.](https://hbr.org/2014/01/white-people-do-good-things-for-one-another-and-thats-bad-for-hiring)" *Harvard Business Review*, January 2014.
            `,
        }}
    />
)

export default Component
