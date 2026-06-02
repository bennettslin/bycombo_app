import React from 'react'
import Page from '../../../containers/Page'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"audience"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: `
${'  ' || `
// TODO: Review commentary a few more times.
`}

I'd like to push back against the term "[audience capture](https://www.gurwinder.blog/p/the-perils-of-audience-capture)," which has gained some traction recently. Mind you, I'm on board with the underlying concept; I just wish more thought had gone into choosing a better first word! After all, there are plenty of others to describe a crowd whose fickle tastes and selfish demands you should be wary of: "followers," "subscribers"…

By contrast, "audience" is the only word we have to describe those you *must* keep in mind. Once we muddy its meaning, then, we lose the notion entirely that the best art is made in service to others. So let's not muddy it! In saying, "Make art for your audience," I shouldn't have to face any resistance— other than from those annoyed that I've just stated a tautology.

While we're at it, ditto for the term "[elite capture](https://openw0rld.substack.com/p/the-elite-capture-of-substack)." In high school, the theme of my graduating class was, "We're the elites." Because, again, there's just no other word to describe those who *should* be in charge! So yes, an institution can be captured by its most credentialed, or most privileged… But let's leave "elite" to mean what teens understand it to mean.
            `,
        }}
    />
)

export default Component
