import React from 'react'
import Page from '../../../containers/Page'
import commentary, { INDIEOCRACY } from '../../../content/commentary/indieocracy'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: INDIEOCRACY,
            metaTitle: INDIEOCRACY,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentary,
        }}
    />
)

export default Component
