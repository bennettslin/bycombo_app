import React from 'react'
import Page from '../../../containers/Page'
import commentaryMap, { AUDIENCE } from '../../../content/commentary'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: AUDIENCE,
            metaTitle: AUDIENCE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentaryMap.get(AUDIENCE),
        }}
    />
)

export default Component
