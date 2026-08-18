import React from 'react'
import Image from '../../components/Image'
import theirGratitudeImage from '../../assets/images/reference/theirGratitude.png'

export default {
    title: `"structured ways"`,
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
}
