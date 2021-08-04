import React from 'react'
import Page from '../../../containers/Page'
import EssayBody from '../../../containers/Page/EssayBody'
import content from '../../../content/essays/2021/7-31-old-links'

export const OLD_LINKS_HEADING = `Old links`

const OldLinks = () => (
    <Page {...{ content, title: OLD_LINKS_HEADING }}>
        <EssayBody
            {...{
                title: OLD_LINKS_HEADING,
                year: 2021,
                month: 7,
                day: 31,
            }}
        >
            {content}
        </EssayBody>
    </Page>
)
export default OldLinks
