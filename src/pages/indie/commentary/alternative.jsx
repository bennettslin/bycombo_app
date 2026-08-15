import React from 'react'
import Page from '../../../containers/Page'
import commentary, { ALTERNATIVE } from '../../../content/commentary/alternative'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const Component = () => (
    <Page
        {...{
            title: ALTERNATIVE,
            metaTitle: ALTERNATIVE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: commentary,
        }}
    />
)

export default Component
