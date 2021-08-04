import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content from '../../content/band'

const Band = () => (
    <Page>
        <MarkdownBody showContactEmail {...{ title: 'Band' }}>
            {content}
        </MarkdownBody>
    </Page>
)

export default Band
