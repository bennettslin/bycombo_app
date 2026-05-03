import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from './constants'

const TITLE = `"collectivist generation"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> Lorem ipsum

"[Individualistic Practices and Values Increasing Around the World.](https://www.psychologicalscience.org/news/releases/individualistic-practices-and-values-increasing-around-the-world.html)" *Association for Psychological Science*, July 2017.
            `,
        }}
    />
)

export default Component
