import React from 'react'
import Page from '../../../containers/Page'
import commentaryMap, { CRED } from '../../../content/commentary'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: CRED,
            metaTitle: CRED,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentaryMap.get(CRED),
        }}
    />
)

export default Component
