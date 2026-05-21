import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"collectivist class"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> The mismatch between institutions' cultural ideal of independence [on the one hand], and the interdependent norms common among working-class individuals [on the other], can reduce the opportunity [of those individuals] to succeed.

> For example, students from working-class backgrounds […] report wanting to help their families and give back to their communities— yet they confront a college setting that stresses paving one's own path and exploring personal passions.

Stephens, Nicole M. and Sarah Townsend. "[Research: How You Feel About Individualism Is Influenced by Your Social Class.](https://hbr.org/2017/05/research-how-you-feel-about-individualism-is-influenced-by-your-social-class)" *Harvard Business Review*, May 2017.
            `,
        }}
    />
)

export default Component
