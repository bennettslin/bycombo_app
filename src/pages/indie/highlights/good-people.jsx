import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import goodPeopleImage from '../../../assets/images/highlights/goodPeople.gif'
import { HIGHLIGHTS_DESCRIPTION } from '../../../constants/pages'

const TITLE = `"good people"`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: HIGHLIGHTS_DESCRIPTION,
            body: [
                (
                    <Image
                        {...{
                            src: goodPeopleImage,
                        }}
                    />
                ),
                `
Clem, Mitch. "[Hippies.](http://www.mitchclem.com/nothingnice/196)" *Nothing Nice to Say*, August 2003.
            `,
            ],
        }}
    />
)

export default Component
