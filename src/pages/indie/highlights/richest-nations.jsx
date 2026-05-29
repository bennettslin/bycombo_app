import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"richest nations"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> I can walk into a shop, pick up something expensive, and then walk out […] without handing over any cash; I use a credit card [instead]. The shop assistant doesn't know whether to trust me, but she trusts the credit card company, and they trust me.

> That's a formalized form of trust […] that dramatically expands our ability to interact with those beyond our immediate neighbors. […] The difference between countries that have successfully formalized trust and those that haven't is, basically, the difference between rich countries and poor ones.

Harford, Tim. "[The Stag Hunt.](https://slate.com/culture/2007/09/the-obscure-game-theory-problem-that-explains-why-rich-countries-are-rich.html)" *Slate*, September 2007.
            `,
        }}
    />
)

export default Component
