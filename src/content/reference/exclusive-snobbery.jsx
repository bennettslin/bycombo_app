import React from 'react'
import Image from '../../components/Image'
import exclusiveSnobberyImage from '../../assets/images/reference/exclusiveSnobbery.jpg'

export default {
    title: `"exclusive snobbery"`,
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
}
