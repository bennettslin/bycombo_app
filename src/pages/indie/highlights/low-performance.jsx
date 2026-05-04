import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"low performance"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> People summon the energy to solve a problem when they sense a gap between their goal and their present state. In a drift to low performance that gap closes, not because performance improves, but because the goal is allowed to slip. Standards erode. The kind of performance that used to cause consternation begins to be defined as normal. Lower expectations, no discrepancy between goal and actuality, no action. Everyone goes to sleep.

> Drift to low performance feeds upon itself. As everyone gets used to mediocrity it's easy for standards to slip still further— which lowers expectations and allows even worse performance. I offer you the United States public schools. The state of our highways. Once a slide downhill gets going, it's hard to stop, because no one believes that what was once possible is possible any more.

Meadows, Donella. "[Drift to Low Performance.](https://donellameadows.org/archives/drift-to-low-performance)" *The Donella Meadows Project*, August 1991.
            `,
        }}
    />
)

export default Component
