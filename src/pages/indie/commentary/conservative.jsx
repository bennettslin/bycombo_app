import React from 'react'
import Page from '../../../containers/Page'
import commentaryMap, { CONSERVATIVE } from '../../../content/commentary'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: CONSERVATIVE,
            metaTitle: CONSERVATIVE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentaryMap.get(CONSERVATIVE),
        }}
    />
)

export default Component
