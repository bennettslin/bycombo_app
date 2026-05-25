import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"random boost"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> When people [like what others] like, differences in popularity are subject to […] "cumulative advantage," or the "rich get richer" effect. This means if one object [is] slightly more popular than another at just the right point, it'll tend to become more popular still.

> Tiny, random fluctuations can blow up, generating […] enormous long-run differences among even indistinguishable competitors.

> Thus if history were to be […] rerun many times, seemingly identical universes with the same set of competitors and […] market tastes would quickly generate different winners: Madonna [is] popular in this world, but in some other version of history, she'd be a nobody, and someone we've never heard of would be in her place.

Watts, Duncan J. "[Is Justin Timberlake a Product of Cumulative Advantage?](https://www.nytimes.com/2007/04/15/magazine/15wwlnidealab.t.html)" *New York Times*, April 2007.
            `,
        }}
    />
)

export default Component
