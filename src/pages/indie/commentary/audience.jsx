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
I'd like to push back against the term "[audience capture](https://www.gurwinder.blog/p/the-perils-of-audience-capture)," which has gained traction recently. Mind you, I'm on board with the underlying concept; I just wish more care had gone into finding a better first word! After all, there are plenty of others to describe a crowd whose fickle tastes and selfish demands you should be wary of: "followers," "subscribers"…

By contrast, "audience" is the only word we have to describe those you *must* keep in mind. Once we muddy its meaning, then, we lose the notion entirely that the best art is made in service to others. So let's not muddy it! In saying, "Make art for your audience," I shouldn't face any backlash— other than from those annoyed that I've just stated a tautology.

While we're at it, I have the same issue with the term "[elite capture](https://openw0rld.substack.com/p/the-elite-capture-of-substack)."
            `,
        }}
    />
)

export default Component
