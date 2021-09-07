import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import content from '../../content/contact'

const Contact = () => (
    <Page>
        <Body showContactEmail {...content} />
    </Page>
)

export default Contact
