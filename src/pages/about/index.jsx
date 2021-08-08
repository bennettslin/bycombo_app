import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content from '../../content/about'

const About = () => (
    <Page>
        <MarkdownBody {...{ title: 'About' }}>
            {content}
        </MarkdownBody>
    </Page>
)

export default About
