import React from 'react'
import Page from '../../containers/Page'

const TITLE = `"keep at it"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> I've built up such an independent empire while being signed up to a major label that it hasn't even mattered what kind of label I'm on because I'm functioning independently anyway. […] That's the paradox: I'm signed to this major label but I'm a totally DIY operation.

Dombal, Ryan. "[Amanda Palmer Tells Roadrunner Records: 'Please Drop Me.'](https://pitchfork.com/news/34979-amanda-palmer-tells-roadrunner-records-please-drop-me)" *Pitchfork*, April 2009.
            `,
        }}
    />
)

export default Component
