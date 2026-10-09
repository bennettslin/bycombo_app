import React from 'react'
import Image from '../../components/Image'
import progressiveImage from '../../assets/images/commentary/progressive.jpg'

export default {
    title: '"progressive"',
    body: [`
${'  ' || `
// TODO: Review a few more times.
`}

In observing the similarities between political and artistic beliefs, I should clarify what I mean by certain terms. Specifically, many treat "progressive" and "liberal" as distinct ideologies— when, in my view, they're not mutually exclusive; instead, they sit along different axes.

${'  ' || `
// TODO: Keep working on. Make image showing all these labels on the upright horseshoe.
`}
    `,
    (
        <Image
            isPortrait
            {...{
                src: progressiveImage,
            }}
        />
    ),
    `
${'  ' || `
// TODO: Review a few more times. Verify whether this analogy is apt.
`}

On the horizontal axis, for instance, the progressive on the left is opposed by the conservative on the right. Where they disagree is on how society— or the arts!— should be structured: A progressive chooses interdependence within the collective, spurred by top-down investment; while a conservative prefers independence for the individual, bootstrapped from the bottom up.

${'  ' || `
// TODO: Review a few more times.
`}

Whereas, on the "upright horseshoe," the opposite of a liberal is an *il*-liberal. The difference is in how each engages with others who disagree with them: While the liberal favors tolerance and compromise, the illiberal insists upon purity tests and polarization. Now, here's the confusing part: A liberal on the left is *still* just a liberal— but on the right, they're called a libertarian!
    `],
}
