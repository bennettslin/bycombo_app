import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"collectivist race"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> Psychologists have known for a long time that people in East Asia think differently, on average, than do those in the U.S. and Europe. Easterners indeed tend to be more cooperative and intuitive, while Westerners lean toward individualism and analytical thinking.

> Now psychologists have evidence that our ancestors planted some of these cultural differences hundreds of years ago when they chose which grains to sow.

Doucleff, Michaeleen. "[Rice Theory: Why Eastern Cultures Are More Cooperative](https://www.npr.org/sections/thesalt/2014/05/08/310477497/rice-theory-why-eastern-cultures-are-more-cooperative)." *NPR*, May 2014.
            `,
        }}
    />
)

export default Component
