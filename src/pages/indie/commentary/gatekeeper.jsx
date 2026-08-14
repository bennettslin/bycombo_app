import React from 'react'
import Page from '../../../containers/Page'
import commentaryMap, { GATEKEEPER } from '../../../content/commentary'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: GATEKEEPER,
            metaTitle: GATEKEEPER,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentaryMap.get(GATEKEEPER),
        }}
    />
)

export default Component
