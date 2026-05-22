import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import conservativeImage from '../../../assets/images/commentary/conservative.png'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"conservative"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: [
                `
As we all know, those in the indie camp largely sit on the political *left*. Given this, some of you might push back on my claim that, if the same dynamics found in politics also exist in the arts, then indie rock is a movement of the artistic *right*. Well, sit tight: My reasoning will be made clear as you read on! Still, I can give a hint of it here and now.

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
Well, "indiefication" puts it on the artist to do all the work of promotion and sales themselves. As a result, it's made their job less do-what-you-love, and more work-hard-play-hard, no? So we'd expect them to demand that others pay the same dues— to indie rock, or whatever— and that this, in turn, would push them further to the right… the *artistic* right, to be precise!

"[Democratic vs. Republican Occupations.](https://verdantlabs.com/politics_of_professions)" *Verdant Labs*.
            `,
            ],
        }}
    />
)

export default Component
