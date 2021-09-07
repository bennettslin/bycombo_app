import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content from '../../content/about'

const About = () => (
    <Page>
        <MarkdownBody {...content} />
    </Page>
)

export default About
