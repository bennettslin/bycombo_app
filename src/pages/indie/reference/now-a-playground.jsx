import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import aPlaygroundImage from '../../../assets/images/reference/aPlayground.jpg'
import { REFERENCE_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"now a playground"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: REFERENCE_DESCRIPTION,
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
