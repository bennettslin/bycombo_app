import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import elitistSnobsImage from '../../../assets/images/highlights/elitistSnobs.jpg'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"elitist snobs"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
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
        }}
    />
)

export default Component
