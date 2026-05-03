import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from './constants'

const TITLE = `"rappers revel"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> TREVIN JONES: Welcome back! We're here on Bad Boy Television, and I'm Trevin Jones. I've been conversing with the Mad Rapper, and quite frankly, he's very mad. We're going to try to find out why— so we'll take some questions at this point from our studio audience. Yes, ma'am— please stand and state your name, and where you're from.

> SHAY: Hi, my name is Shay, and I'm from New Rochelle. And I just don't understand— why are you so mad? […]

> THE MAD RAPPER: Yo, you wanna know why? First of all, you can't be askin' me no question, youknowhatI'msayin'? Who the fuck is you? I'ma tell you why I'm mad. These n****s is makin' $500,000 videos, they drivin' around in hot cars, they got bitches, they got all that shit. I'm still livin' with my moms! That's my word.

> I'm makin' records, I ain't made no money yet. This is my fourth album, yo. I ain't made a dime yet. This n**** made one album, he makin' wild records. That *Ready to Die* shit? It was aight, it was cool. But my shit is more John Blaze than that! And they not recognizin'. And who is you to be askin' me questions?

The Notorious B.I.G. "[Kick in the Door.](https://youtu.be/78SV9tguyVM)" *Life After Death*, March 1997.
            `,
        }}
    />
)

export default Component
