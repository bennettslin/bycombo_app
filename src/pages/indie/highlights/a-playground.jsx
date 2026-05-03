import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import aPlaygroundImage from '../../../assets/images/highlights/aPlayground.jpg'
import { HIGHLIGHTS_DESCRIPTION } from './constants'

const TITLE = `"a playground"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: [
                (
                    <Image
                        isPortrait
                        {...{
                            src: aPlaygroundImage,
                        }}
                    />
                ),
                `
"[Parent Names Are Blue on Wikipedia.](https://knowyourmeme.com/memes/parent-names-are-blue-on-wikipedia)" *Know Your Meme*, February 2022.
            `,
            ],
        }}
    />
)

export default Component
