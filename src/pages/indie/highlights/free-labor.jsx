import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"free labor"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> It's easy to laugh, less easy to recognize the way that milking fans of devotion and dollars has been an explicit business aim for decades. […] Information silos and micro-targeting make it harder [still] to see when fans are being taken advantage of.

> Even the concept of fan […] labour is somewhat laughed off, as seen in the "Swifties Unionize" prank.

Ali, Monia. "[Revenge of the Stans.](https://exiledfan.substack.com/p/revenge-of-the-stans)" *Exiled Fan*, June 2023.
            `,
        }}
    />
)

export default Component
