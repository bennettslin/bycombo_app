import React from 'react'
import Image from '../../components/Image'
import aPlaygroundImage from '../../assets/images/reference/aPlayground.jpg'

export default {
    title: `"now a playground"`,
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
}
