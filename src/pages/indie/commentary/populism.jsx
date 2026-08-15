import React from 'react'
import Page from '../../../containers/Page'
import commentary, { POPULISM } from '../../../content/commentary/populism'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: POPULISM,
            metaTitle: POPULISM,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentary,
        }}
    />
)

export default Component
