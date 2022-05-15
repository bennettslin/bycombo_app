import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            body: `
### Bobtail Yearlings links

[*Bobtail Yearlings*](https://www.bobtailyearlings.com/)${'  '}
Our band website.

[*Bobtail Dominoes*](https://www.bobtaildominoes.com/)${'  '}
Our musical tile game.

[*Bobtail Method*](https://www.bobtailmethod.com/)${'  '}
Our songwriting lesson book.

[*Yearling's Bobtail*](https://www.yearlingsbobtail.com/)${'  '}
Our "*Ulysses* of rock albums."
            `,
        }}
    />
)

export default Component
