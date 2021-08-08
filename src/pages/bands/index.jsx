import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content from '../../content/bands'

const Bands = () => (
    <Page>
        <MarkdownBody {...{ title: 'Bands' }}>
            {content}
        </MarkdownBody>
    </Page>
)

export default Bands
