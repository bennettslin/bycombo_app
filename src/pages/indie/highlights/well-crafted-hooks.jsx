import React from 'react'
import Page from '../../../containers/Page'

const TITLE = `"well-crafted hooks"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> In spite of making two of the most durable albums of the grunge era (and one of the most ridiculously named), 1994's *Purple* and 1996's *Tiny Music… Songs From The Vatican Gift Shop*, Stone Temple Pilots are not yet recognized as one of the best mainstream rock bands of their era. Which is wrong, and somewhat surprising. STP's B-level status in '90s rock history has practically nothing to do with the music and almost everything to do with the misfortune of coming out during one of the most annoyingly cred-conscious periods in the history of mainstream rock.

Hyden, Steven. "[Stone Temple Pilots: They're Actually Good! (Really!)](https://www.avclub.com/stone-temple-pilots-theyre-actually-good-really-1798213754)" *The A.V. Club*, April 2008.
            `,
        }}
    />
)

export default Component
