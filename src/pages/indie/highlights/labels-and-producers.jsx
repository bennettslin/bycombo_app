import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"labels and producers"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> Ain't nuthin' but a "G" thang, baby${'  '}
Two loc'd out n****s goin' crazy${'  '}
Death Row is the label that pays me

Dr. Dre featuring Snoop Doggy Dogg. "[Nuthin' but a 'G' Thang.](https://youtu.be/8GliyDgAGQI)" *The Chronic*, January 1993.
            `,
        }}
    />
)

export default Component
