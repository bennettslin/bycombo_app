import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"label's dime"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> I've built up such an independent empire while being signed […] to a major label that it [doesn't even matter] what kind of label I'm on because [I function] independently anyway. […] That's the paradox: I'm signed to this major label but I'm a totally DIY operation.

Dombal, Ryan. "[Amanda Palmer Tells Roadrunner Records: 'Please Drop Me.'](https://pitchfork.com/news/34979-amanda-palmer-tells-roadrunner-records-please-drop-me)" *Pitchfork*, April 2009.
            `,
        }}
    />
)

export default Component
