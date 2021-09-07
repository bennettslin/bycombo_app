import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import content from '../../content/apply'

const Apply = () => (
    <Page>
        <Body showContactEmail {...content} />
    </Page>
)

export default Apply
