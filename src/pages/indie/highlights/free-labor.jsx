import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from './constants'

const TITLE = `"free labor"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> It's easy to laugh, less easy to recognize the way milking fans of devotion and dollars [has] been an explicit business aim for decades. The climate of information silos and micro-targeting makes it harder to even see when fans are being taken advantage of. Even the concept of fan work/labour is somewhat laughed off, as seen in the "Swifties Unionize" prank.

Ali, Monia. "[Revenge of the Stans.](https://exiledfan.substack.com/p/revenge-of-the-stans)" *Exiled Fan*, June 2023.
            `,
        }}
    />
)

export default Component
