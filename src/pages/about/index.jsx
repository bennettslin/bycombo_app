import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import content from '../../content/about'

const About = () => (
    <Page>
        <Body {...content} />
    </Page>
)

export default About
