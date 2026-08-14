import React from 'react'
import Page from '../../../containers/Page'
import commentaryMap from '../../../content/commentary'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `cred`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentaryMap.get(TITLE),
        }}
    />
)

export default Component
