import React from 'react'
import Page from '../../containers/Page'
import Image from '../../components/Image'
import exclusiveSnobberyImage from '../../assets/images/highlights/exclusiveSnobbery.jpg'

const TITLE = `"exclusive snobbery"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
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
