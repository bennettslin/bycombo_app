import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"random boost"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> [W]hen people tend to like what other people like, differences in popularity are subject to what is called "cumulative advantage," or the "rich get richer" effect. This means that if one object happens to be slightly more popular than another at just the right point, it will tend to become more popular still. As a result, even tiny, random fluctuations can blow up, generating potentially enormous long-run differences among even indistinguishable competitors […]

> Thus, if history were to be somehow rerun many times, seemingly identical universes with the same set of competitors and the same overall market tastes would quickly generate different winners: Madonna would have been popular in this world, but in some other version of history, she would be a nobody, and someone we have never heard of would be in her place.

Watts, Duncan J. "[Is Justin Timberlake a Product of Cumulative Advantage?](https://www.nytimes.com/2007/04/15/magazine/15wwlnidealab.t.html)." *New York Times*, April 2007.
            `,
        }}
    />
)

export default Component
