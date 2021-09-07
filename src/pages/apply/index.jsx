import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content from '../../content/apply'

const Apply = () => (
    <Page>
        <MarkdownBody showContactEmail {...content} />
    </Page>
)

export default Apply
