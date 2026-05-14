import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"making it tyranny"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> Jackson's populism was [a ploy] for pro-slavery, pro-states-rights interests. He was a wealthy slaveholder himself, with no qualms about African-American bondage, and deep hostility to [both] abolitionism [and] the early movement for women's rights.

Watson, Harry. "[Andrew Jackson, America's Original Anti-Establishment Candidate.](https://www.smithsonianmag.com/history/andrew-jackson-americas-original-anti-establishment-candidate-180958621)" *Smithsonian Magazine*, March 2016.
            `,
        }}
    />
)

export default Component
