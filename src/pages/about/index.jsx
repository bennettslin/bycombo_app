import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content, { title } from '../../content/about'

const About = () => (
    <Page>
        <MarkdownBody {...{ title }}>
            {content}
        </MarkdownBody>
    </Page>
)

export default About
