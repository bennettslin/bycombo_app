import React from 'react'
import Page from '../../../containers/Page'
import commentaryMap, { POPULISM } from '../../../content/commentary'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: POPULISM,
            metaTitle: POPULISM,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentaryMap.get(POPULISM),
        }}
    />
)

export default Component
