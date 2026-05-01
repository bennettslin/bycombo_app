import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"a conservative"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
Obviously, most people in the arts sit on the political *left*— and those in the indie camp, even more so. Given such, some will likely push back against my claim that, if there's an artistic spectrum to mirror our political one, then the indie camp sits on its *right*. I may expand upon this in a future blog post, but for now, here's my go-to explanation.

Let's begin by observing that some jobs allow you to "do what you love," and thus they offer meaning and fulfillment directly. Whereas, with others, you "work hard, play hard," and this, in turn, affords you all the things that offer meaning and fulfillment *outside* of work. Neither is better; it's just a matter of which you prefer, given what kind of person you are. We need all kinds!

Now, you'll notice that people with the former type of job tend to sit on the political left; and those with the latter, the right. Why? I suspect it's because the latter naturally compels you to care more about fair compensation, as well as to punish any freeloaders— namely, those who neglect to pay their dues to society. And such an outlook is associated with the right.

Well, "indiefication" tasks the artist with doing more of the administrative work themselves; in doing so, it's made their job less "do what you love," and more "work hard, play hard," no? So we'd expect today's hopefuls to have an outlook associated with the right! And as an Xennial, I'll attest that, indeed, they seem to be a different kind of person than those I met in the past.

"[The Politics of Professions.](https://verdantlabs.com/politics_of_professions)" *Verdant Labs*.
            `,
        }}
    />
)

export default Component
