import React from 'react'
import Page from '../../../containers/Page'
import commentary, { AUDIENCE } from '../../../content/commentary/audience'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: AUDIENCE,
            metaTitle: AUDIENCE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentary,
        }}
    />
)

export default Component
