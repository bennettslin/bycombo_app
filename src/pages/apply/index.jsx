import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content from '../../content/apply'

const Apply = () => (
    <Page>
        <MarkdownBody showContactEmail {...{ title: 'Apply' }}>
            {content}
        </MarkdownBody>
    </Page>
)

export default Apply
