import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"backs to starlight"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> [M]oths and many other insects that fly at night evolved to tilt their back to wherever is brightest. For hundreds of millions of years, this was the sky rather than the ground. The trick told insects which way was up and ensured they flew level.

Sample, Ian. "[Why Are Moths Attracted to Lights? Science May Finally Have an Answer.](https://www.theguardian.com/science/2024/jan/30/why-are-moths-attracted-to-lights-science-answer)" *The Guardian*, January 2024.
            `,
        }}
    />
)

export default Component
