import React from 'react'
import Page from '../../../containers/Page'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"populism"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: `
${'  ' || `
// TODO: Review whole commentary a few more times.
`}

How did indie rock, which had originally *subverted* the people's will, become a populist movement that now *obeys* it instead? After being stumped for so long, I finally understand: Populism doesn't so much rebel against *economic* elites as against *cognitive* ones. In other words, it trusts common sense and intuition, while scorning the elite's abstract and deliberate way of thinking.

Well, as stated earlier, the indie labels are all about conserving brainpower, while indie tastemakers pride themselves on being "in the know"— both of which favor a reliance on gut instincts, as common people do. Meanwhile, because indie rock's snobbery had always been based on exclusivity rather than elitism, it was never loyal to any system of elites in the first place.

Heath, Joseph. "[The Populist Revolt Against Cognitive Elites.](https://www.theatlantic.com/ideas/2025/12/populism-left-wing-mamdani/685238)" *The Atlantic*, December 2025.
            `,
        }}
    />
)

export default Component
