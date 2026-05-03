import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from './constants'

const TITLE = `"succeeded more"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> So thank you, Uncle Sam. Someday your nieces and nephews at Berkshire hope to send you even larger payments than we did in 2024. Spend it wisely. Take care of the many who, for no fault of their own, get the short straws in life. They deserve better.

Buffett, Warren. "[2024 Annual Letter to Shareholders.](https://www.berkshirehathaway.com/letters/2024ltr.pdf)" *Berkshire Hathaway*, February 2025.
            `,
        }}
    />
)

export default Component
