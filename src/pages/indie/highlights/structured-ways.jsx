import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import theirGratitudeImage from '../../../assets/images/highlights/theirGratitude.png'
import { HIGHLIGHTS_DESCRIPTION } from './constants'

const TITLE = `"structured ways"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: [
                (
                    <Image
                        {...{
                            src: theirGratitudeImage,
                        }}
                    />
                ),
                `
Munroe, Randall. "[Isolation.](https://xkcd.com/1601)" *XKCD*, November 2015.
            `,
            ],
        }}
    />
)

export default Component
