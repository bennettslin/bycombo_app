import React from 'react'
import Image from '../../components/Image'
import freeLaborImage from '../../assets/images/reference/freeLabor.jpg'

export default {
    title: `"free labor"`,
    body: [
        `
> It's easy to laugh, less easy to recognize the way that milking fans of devotion and dollars has been an explicit business aim for decades. […] Information silos and micro-targeting make it harder [still] to see when fans are being taken advantage of.

> Even the concept of fan […] labour is somewhat laughed off, as seen in the "Swifties Unionize" prank.
        `,
        (
            <Image
                isPortrait
                {...{
                    src: freeLaborImage,
                }}
            />
        ),
        `
Ali, Monia. "[Revenge of the Stans.](https://exiledfan.substack.com/p/revenge-of-the-stans)" *Exiled Fan*, June 2023.${'  '}
Troemel, Brad. "[Here's why you should support…](https://www.instagram.com/p/Cs6lU6LuzG3)" *Instagram*, May 2023.
        `,
    ],
}
