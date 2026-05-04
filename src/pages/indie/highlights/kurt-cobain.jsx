import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"Kurt Cobain"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> "I don't blame the average seventeen-year-old punk-rock kid for calling me a sellout," Cobain adds. "I understand that. And maybe when they grow up a little bit, they'll realize there's more things to life than living out your rock and roll identity so righteously."

Azerrad, Michael. "[Nirvana: Inside the Heart and Mind of Kurt Cobain.](https://www.rollingstone.com/feature/nirvana-inside-the-heart-and-mind-of-kurt-cobain-103770)" *Rolling Stone*, April 1992.
            `,
        }}
    />
)

export default Component
