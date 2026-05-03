import React from 'react'
import Page from '../../../containers/Page'

const TITLE = `"place of origin"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> [T]hey are from Wisconsin and I will always cape for Wisco rock.

Hyden, Steven. "[I interviewed Emily from @slowpulpband…](https://x.com/Steven_Hyden/status/1708868954741977173)" *X*, October 2023.
            `,
        }}
    />
)

export default Component
