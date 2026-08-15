import React from 'react'
import Page from '../../../containers/Page'
import commentary, { GATEKEEPER } from '../../../content/commentary/gatekeeper'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: GATEKEEPER,
            metaTitle: GATEKEEPER,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentary,
        }}
    />
)

export default Component
