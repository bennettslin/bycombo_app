import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import goodPeopleImage from '../../../assets/images/highlights/goodPeople.gif'

const TITLE = `"good people"`
const DESCRIPTION = `Highlighted text from linked source.`

const Component = () => (
    <Page
        {...{
            title: TITLE,
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
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
