import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"collectivist class"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> [P]eople from working-class backgrounds tend to understand themselves as interdependent with and highly connected to others. Parents teach their children the importance of following the rules and adjusting to the needs of others, in part because there is no economic safety net to fall back on. Common sayings include "You can't always get what you want" and "It's not all about you"; values such as solidarity, humility, and loyalty take precedence.

> In contrast, people from middle- and upper-class contexts tend to understand themselves as independent and separate from others. Parents teach kids the importance of cultivating their personal preferences, needs, and interests. Common sayings include "The world is your oyster" and "Your voice matters"; values such as uniqueness, self-expression, and influence take precedence.

> The mismatch between institutions' cultural ideal of independence and the interdependent norms common among working-class individuals can reduce their opportunity to succeed. In higher education, for example, students from working-class backgrounds (i.e., students whose parents do not have four-year degrees) report wanting to help their families and give back to their communities, yet they confront a college setting that stresses paving one's own path and exploring personal passions.

Stephens, Nicole M. and Sarah Townsend. "[Research: How You Feel About Individualism Is Influenced by Your Social Class](https://hbr.org/2017/05/research-how-you-feel-about-individualism-is-influenced-by-your-social-class)." *Harvard Business Review*, May 2017.
            `,
        }}
    />
)

export default Component
