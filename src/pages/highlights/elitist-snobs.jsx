import React from 'react'
import Page from '../../containers/Page'
import Image from '../../components/Image'
import elitistSnobsImage from '../../assets/images/highlights/elitistSnobs.jpg'

const TITLE = `"elitist snobs"`
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
