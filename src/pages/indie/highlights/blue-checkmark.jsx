import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"blue checkmark"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> Twitter's current lords & peasants system for who has or doesn't have a blue checkmark is bullshit. Power to the people! Blue for $8/month.

Musk, Elon. "[Twitter's current lords & peasants system…](https://x.com/elonmusk/status/1587498907336118274)" *X*, November 2022.
            `,
        }}
    />
)

export default Component
