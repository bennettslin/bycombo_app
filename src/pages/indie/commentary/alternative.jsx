import React from 'react'
import Page from '../../../containers/Page'
import commentaryMap, { ALTERNATIVE } from '../../../content/commentary'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: ALTERNATIVE,
            metaTitle: ALTERNATIVE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentaryMap.get(ALTERNATIVE),
        }}
    />
)

export default Component
