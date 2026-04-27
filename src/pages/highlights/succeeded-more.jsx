import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"succeeded more"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> "So thank you, Uncle Sam. Someday your nieces and nephews at Berkshire hope to send you even larger payments than we did in 2024. Spend it wisely. Take care of the many who, for no fault of their own, get the short straws in life. They deserve better."

Littleton, Cynthia. "[Warren Buffett Says 'It Won't Be Long' Before Greg Abel Succeeds Him as Berkshire Hathaway CEO.](https://variety.com/2025/biz/news/warren-buffett-greg-abel-succeeded-ceo-berkshire-1236316306)" *Variety*, February 2025.
            `,
        }}
    />
)

export default Component
