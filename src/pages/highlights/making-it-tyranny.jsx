import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"making it *tyranny*"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> Jackson's populism was thus a Trojan horse for pro-slavery, pro-states-rights interests. He was a wealthy slaveholder himself, with no qualms about African-American bondage and deep hostility to abolitionism. He ignored the early movement for women's rights, and his infamous policy of Indian removal partly stemmed from demands by his "base" for plentiful free land.

Watson, Harry. "[Andrew Jackson, America's Original Anti-Establishment Candidate.](https://www.smithsonianmag.com/history/andrew-jackson-americas-original-anti-establishment-candidate-180958621)" *Smithsonian Magazine*, March 2016.
            `,
        }}
    />
)

export default Component
