import React from 'react'
import Page from '../../../containers/Page'
import commentary from '../../../content/commentary/cred'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const { title, body } = commentary

const Component = () => (
    <Page
        {...{
            title,
            metaTitle: title,
            metaDescription: COMMENTARY_DESCRIPTION,
            body,
        }}
    />
)

export default Component
