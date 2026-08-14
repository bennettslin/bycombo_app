import React from 'react'
import Page from '../../../containers/Page'
import { REFERENCE_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"can afford"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: REFERENCE_DESCRIPTION,
            body: `
> You can hear Kurt's tremulous nervousness and bumbling desire to belong, to be part of it. […] But at the same time, he started to resent […] these twee college-kid followers of the new indie ideology.

> It seems like half the songs on *Nevermind* were the result of a […] hostility that grew in Kurt toward [the indie scene in Olympia] that he desperately wanted the approval of, but by [his working-class] disposition, wasn't suited to somehow.

> Much has been made about the psychic wounds [inflicted] on Kurt by his fame: […] sell out to the evil money men, see how empty it is, lose yourself, die. […] But [the ones] he sustained from [the Olympia indie scene] have somehow gone missing [from the record].

> There's clear […] evidence that, whatever [it was] he'd experienced, it led him […] to rebel against them […] by signing with a major label, [making lots of money], and getting as famous as humanly possible.

Smith, Aaron Lake. "[Stupid and Contagious.](https://emptyrailroadgulch.substack.com/p/nirvana)" *Empty Railroad Gulch*, August 2022.
            `,
        }}
    />
)

export default Component
