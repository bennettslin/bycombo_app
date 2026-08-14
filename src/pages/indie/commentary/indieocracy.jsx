import React from 'react'
import Page from '../../../containers/Page'
import commentaryMap, { INDIEOCRACY } from '../../../content/commentary'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: INDIEOCRACY,
            metaTitle: INDIEOCRACY,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentaryMap.get(INDIEOCRACY),
        }}
    />
)

export default Component
