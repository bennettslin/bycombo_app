import React from 'react'
import Page from '../../../containers/Page'
import commentary from '../../../content/commentary/all'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const { title, body } = commentary

const Component = () => (
    <Page
        {...{
            title,
            metaTitle: title,
            metaDescription: COMMENTARY_DESCRIPTION,
            body,
        }}
    />
)

console.log(body)

export default Component
