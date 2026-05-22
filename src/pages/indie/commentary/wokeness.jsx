import React from 'react'
import Page from '../../../containers/Page'
import { COMMENTARY_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"wokeness"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: COMMENTARY_DESCRIPTION,
            body: `
Everyone has their own idea of the origin of wokeness.

Long story short, "indiefication" favors those who hustle to get the job, over those who wait on elites to say they deserve it— thus negating the power of trying much harder, to be much better— the one path taken by outsiders throughout history to overcome their disadvantage.

Once the arts have been indiefied, then, the only recourse available to give fair representation to women and minorities is to lower our standards. But while few notice when White men are held to a lower standard, everyone notices when this happens with women and minorities, and this is what's called "wokeness."
            `,
        }}
    />
)

export default Component
