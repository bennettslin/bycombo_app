import React from 'react'
import Page from '../../containers/Page'
import Image from '../../components/Image'
import aConservativeImage from '../../assets/images/highlights/aConservative.png'

const TITLE = `"a conservative"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: [
                `
As we all know, most people in the arts sit on the political *left*— and among the indie camp, even more so. Given such, some will likely push back against my claim that, if there's an artistic spectrum to mirror the political one, then the indie camp sits on its *right*. I may expand upon this in a future blog post, but for now, here's my go-to explanation.

Let's begin by observing that some jobs allow you to "do what you love," and thus they offer meaning and fulfillment directly. Whereas, with others, you "work hard, play hard," and this, in turn, affords you all the things that offer meaning and fulfillment *outside* of work. Neither is better; it's just a matter of which you prefer, based on the kind of person you are. We need all kinds!

Now, you'll notice that people with the former type of job tend to sit on the political left; and those with the latter, the right. Why? I suspect it's because the latter compels you to care more about punishing freeloaders— namely, those who neglect to pay their dues to society. And such an outlook is more closely associated with the *right*.
            `,
                (
                    <Image
                        {...{
                            src: aConservativeImage,
                        }}
                    />
                ),
                `
Well, "indiefication" puts it on each artist to do more of the promotion and sales themselves; as a result, it's made their job less do-what-you-love, and more work-hard-play-hard, no? So we'd expect those today to have more of an outlook associated with the right— the *artistic* right! And as an Xennial, I'll attest that, relative to the past I remember, this does seem to be true.

"[Democratic vs. Republican Occupations.](https://verdantlabs.com/politics_of_professions)" *Verdant Labs*.
            `,
            ],
        }}
    />
)

export default Component
