import React from 'react'
import Page from '../../../containers/Page'

const TITLE = `"branched off"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> For mainstream rock fans like myself, the popular alternative music of the early '90s really did seem like a legitimate insurgence from the underground. But when Pavement's Stephen Malkmus indifferently mocked Smashing Pumpkins and Stone Temple Pilots in the lyrics to "Range Life," one of the breakout songs from 1994's *Crooked Rain Crooked Rain*, it was an early sign that this was no longer true— or, worse, had never been true in the first place. Unwittingly or not, "Range Life" taught me that the alternative rock bands I liked were overblown frauds […]

Hyden, Steven. "[Part 6: 1995: Live, Bush, and Alanis Morissette Take the Pop Path.](https://www.avclub.com/part-6-1995-live-bush-and-alanis-morissette-take-th-1798223405)" *The A.V. Club*, December 2010.
            `,
        }}
    />
)

export default Component
