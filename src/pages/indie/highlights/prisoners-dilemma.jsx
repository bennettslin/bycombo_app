import React from 'react'
import Page from '../../../containers/Page'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"prisoner's dilemma"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: `
> Using the example of pollution, the options of "cooperate" and "not cooperate" would become to "not pollute" and "pollute," respectively. The optimal outcome would be for both players to cooperate and not pollute, resulting in a cleaner planet that benefits everybody.

> However, that option isn't in equilibrium, because [you're] better off not cooperating and [instead] letting [others] "clean the world" for you. This is a result of the common […] idea that one person's actions don't make any difference, and is the reason the final equilibrium is always the sub-optimal option: Both players end up polluting.

"[Prisoner's Dilemma and the Environment.](https://blogs.cornell.edu/info2040/2012/09/24/prisoners-dilemma-and-the-environment)" *Cornell University Department of Information Science*, September 2012.
            `,
        }}
    />
)

export default Component
