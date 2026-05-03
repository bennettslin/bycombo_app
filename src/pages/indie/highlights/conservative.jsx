import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import conservativeImage from '../../../assets/images/highlights/conservative.png'

const TITLE = `"conservative"`
const DESCRIPTION = `Some personal commentary.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: [
                `
As we all know, people in the arts largely sit on the political *left*— and within the indie camp, even more so. Given such, some of you might push back on my claim that, if there's an artistic spectrum to mirror the political one, then the indie camp sits on its *right*. My reasoning behind this will be made clear as you read on, but I can give a hint of it here and now.

Let's begin by observing that some jobs allow you to "do what you love," and thus they offer meaning and fulfillment directly. Whereas, with others, you "work hard, play hard"; that is to say, they afford you all the things that offer meaning and fulfillment *outside* of work. Neither is best; it's just a matter of which you prefer, based on the kind of person you are. We need all kinds!

Now, you'll notice that people with the former type of job tend to sit on the political left; and those with the latter, the right. Why? I suspect it's because the latter causes you to see work as "paying your dues" to society— which, in turn, makes you care more about punishing those who neglect to pay *theirs*. And this outlook is associated with the right.
            `,
                (
                    <Image
                        {...{
                            src: conservativeImage,
                        }}
                    />
                ),
                `
Well, "indiefication" puts it on the artist to do all the work of promotion and sales themselves. As a result, it's made their job less do-what-you-love, and more work-hard-play-hard, no? So we'd expect the outlook of today's artists to lean more to the right— the *artistic* right, to be exact! And as an Xennial, I can attest that, relative to the past I remember, this seems to be the case.

"[Democratic vs. Republican Occupations.](https://verdantlabs.com/politics_of_professions)" *Verdant Labs*.
            `,
            ],
        }}
    />
)

export default Component
