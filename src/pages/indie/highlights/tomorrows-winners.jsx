import React from 'react'
import Page from '../../../containers/Page'

const TITLE = `"tomorrow's winners"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
> Come writers and critics${'  '}
Who prophesize with your pen${'  '}
And keep your eyes wide${'  '}
The chance won't come again${'  '}
And don't speak too soon${'  '}
For the wheel's still in spin${'  '}
And there's no tellin' who that it's namin'${'  '}
For the loser now will be later to win${'  '}
For the times they are a-changin'

Dylan, Bob. "[The Times They Are A-Changin'.](https://youtu.be/90WD_ats6eE)" *The Times They Are A-Changin'*, March 1965.
            `,
        }}
    />
)

export default Component
