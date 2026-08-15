import React from 'react'
import Page from '../../../containers/Page'
import commentary, { CONSERVATIVE } from '../../../content/commentary/conservative'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: CONSERVATIVE,
            metaTitle: CONSERVATIVE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentary,
        }}
    />
)

export default Component
