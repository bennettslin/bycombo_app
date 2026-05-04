import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"watch in confusion"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> Sanders […] believed his calls for a "political revolution" to fight the power of corporations and the wealthy would have natural appeal across racial lines. […] Here was his chance to prove that he really was breaking through with black voters— and that he really did have a chance of winning the nomination. Instead, he got crushed. […]

> Among [South Carolina's] black voters, Clinton's margin of support was staggering: 72 percentage points, 86 to 14 percent […] Black voters [also] made up more than one-quarter of all Democratic primary voters nationally, and they were instrumental in supplying Clinton with what became an insurmountable delegate lead.

Kornacki, Steve. "[2016: Clinton, Sanders and black voters pick the winner.](https://www.nbcnews.com/politics/elections/2016-clinton-sanders-black-voters-pick-winner-n1029631)" *NBC News*, July 2019.
            `,
        }}
    />
)

export default Component
