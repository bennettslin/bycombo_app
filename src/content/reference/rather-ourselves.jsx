import React from 'react'
import Image from '../../components/Image'
import ratherOurselvesImage from '../../assets/images/reference/ratherOurselves.png'

export default {
    title: `"rather ourselves"`,
    body: [
        (
            <Image
                isPortrait
                {...{
                    src: ratherOurselvesImage,
                }}
            />
        ),
        `
${'  ' || `
// TODO: Review reference.
`}

Kelly, Walt. "[We Have Met the Enemy and He Is Us.](https://library.osu.edu/dc/concern/generic_works/zw12z753f)" *Environmental Action*, distributed by *Post-Hall Syndicate*, April 1970.
        `,
    ],
}
