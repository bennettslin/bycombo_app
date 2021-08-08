import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content from '../../content/contact'

const Contact = () => (
    <Page>
        <MarkdownBody showContactEmail {...{ title: 'Contact' }}>
            {content}
        </MarkdownBody>
    </Page>
)

export default Contact
