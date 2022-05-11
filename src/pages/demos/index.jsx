import React from 'react'
import Demo from '../../components/Demo'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            body: [
                `
If you have any questions, or if you'd like to help us get the word out about BYCombo, please get in touch. Thanks!
                `,
                (
                    <Demo
                        {...{
                            band: `Bobtail Yearlings`,
                            title: `Yearling's Bobtail`,
                            description: `"A thousand *Yearling's Bobtail*s" needs to start with the original one!`,
                        }}
                    />
                ),
            ],
        }}
    />
)

export default Component
