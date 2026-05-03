import React from 'react'
import Page from '../../../containers/Page'

const TITLE = `"other artists"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> Berg's research suggests that […] the best judges are peers of the creator, who have spent time generating their own ideas, but not the idea in question. […]

> "When we generate ideas, we first engage in divergent thinking, which involves searching for novel connections or combinations that may be valuable. After we generate possible ideas, we engage in convergent thinking as we evaluate the ideas based on our previous knowledge and experience. Since managers evaluate ideas after creators have generated them, they skip divergent thinking and go straight to convergent thinking."

Lee, Louise. "[Managers Are Not Always the Best Judge of Creative Ideas.](https://www.gsb.stanford.edu/insights/managers-are-not-best-judge-creative-ideas)" *Stanford Graduate School of Business*, January 2016.
            `,
        }}
    />
)

export default Component
