import React from 'react'
import Image from '../../components/Image'
import elitistSnobsImage from '../../assets/images/reference/elitistSnobs.jpg'

export default {
    title: `"elitist snobs"`,
    body: [
        (
            <Image
                isSquare
                {...{
                    src: elitistSnobsImage,
                }}
            />
        ),
        `
"[Your Music's Bad and You Should Feel Bad.](https://knowyourmeme.com/memes/your-musics-bad-and-you-should-feel-bad)" *Know Your Meme*, November 2010.
        `,
    ],
}
