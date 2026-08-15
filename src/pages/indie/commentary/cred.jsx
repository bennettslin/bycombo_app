import React from 'react'
import Page from '../../../containers/Page'
import commentary, { CRED } from '../../../content/commentary/cred'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: CRED,
            metaTitle: CRED,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentary,
        }}
    />
)

export default Component
