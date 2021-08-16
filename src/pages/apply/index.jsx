import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content, { title } from '../../content/apply'

const Apply = () => (
    <Page>
        <MarkdownBody showContactEmail {...{ title }}>
            {content}
        </MarkdownBody>
    </Page>
)

export default Apply
