import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"smart investor"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> When I was underground, no one gave a fuck I was White${'  '}
No labels wanted to sign me, almost gave up, I was like${'  '}
"Fuck it," until I met Dre, the only one to look past${'  '}
Gave me a chance and I lit a fire up under his ass

Eminem. "[White America.](https://youtu.be/RZIzD0ZfTFg)" *The Eminem Show*, May 2002.
            `,
        }}
    />
)

export default Component
