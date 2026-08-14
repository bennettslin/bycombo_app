import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import exclusiveSnobberyImage from '../../../assets/images/reference/exclusiveSnobbery.jpg'
import { REFERENCE_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"exclusive snobbery"`

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
                            src: exclusiveSnobberyImage,
                        }}
                    />
                ),
                `
"[Hipster Kitty.](https://knowyourmeme.com/memes/hipster-kitty)" *Know Your Meme*, February 2010.
            `,
            ],
        }}
    />
)

export default Component
