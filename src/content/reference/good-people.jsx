import React from 'react'
import Image from '../../components/Image'
import goodPeopleImage from '../../assets/images/reference/goodPeople.gif'

export default {
    title: `"good people"`,
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
}
