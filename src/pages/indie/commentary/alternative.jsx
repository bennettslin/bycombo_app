import React from 'react'
import Page from '../../../containers/Page'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"alternative"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: `
*Whatever Happened to Alternative Nation?* is a ten-part A.V. Club series by Steven Hyden that's helpful reading for anyone trying to understand rock music in the '90s. The URLs have changed since they were first published, and the new ones aren't collated in a single location anywhere else. So I'm doing that here.

* [1990: "Once upon a time, I could love you"](https://www.avclub.com/part-1-1990-once-upon-a-time-i-could-love-you-1798221947)
* [1991: "What's so civil about war anyway?"](https://www.avclub.com/part-2-1991-what-s-so-civil-about-war-anyway-1798222320)
* [1992: Pearl Jam, the perils of fame, and the trouble with avoiding it](https://www.avclub.com/part-3-1992-pearl-jam-the-perils-of-fame-and-the-tr-1798222434)
* [1993: Smashing Pumpkins, Liz Phair, and Urge Overkill forsake the underground](https://www.avclub.com/part-4-1993-smashing-pumpkins-liz-phair-and-urge-ov-1798222751)
* [1994: Kurt Cobain is dead! Long live Soundgarden!](https://www.avclub.com/part-5-1994-kurt-cobain-is-dead-long-live-soundgarde-1798223081)
* [1995: Live, Bush, and Alanis Morissette take the pop path](https://www.avclub.com/part-6-1995-live-bush-and-alanis-morissette-take-th-1798223405)
* [1996: Layne Staley and Bradley Nowell are the living dead](https://www.avclub.com/part-7-1996-layne-staley-and-bradley-nowell-are-the-l-1798223643)
* [1997: The ballad of Oasis and Radiohead](https://www.avclub.com/part-8-1997-the-ballad-of-oasis-and-radiohead-1798223989)
* [1998: You're either with Korn and Limp Bizkit, or you're against them](https://www.avclub.com/part-9-1998-you-re-either-with-korn-and-limp-bizkit-1798224287)
* [1999: By the time we got to Woodstock 99…](https://www.avclub.com/part-10-1999-by-the-time-we-got-to-woodstock-99-1798224355)
            `,
        }}
    />
)

export default Component
