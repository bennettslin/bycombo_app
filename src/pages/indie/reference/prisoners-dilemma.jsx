import React from 'react'
import Page from '../../../containers/Page'
import reference from '../../../content/reference/prisoners-dilemma'
import { REFERENCE_DESCRIPTION } from '../../../constants/pages'

const { title, body } = reference

const Component = () => (
    <Page
        {...{
            title,
            metaTitle: title,
            metaDescription: REFERENCE_DESCRIPTION,
            body,
        }}
    />
)

export default Component
