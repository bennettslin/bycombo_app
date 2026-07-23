import src from '../../../../assets/images/bobtailYearlings.png'
import {
    BOBTAIL_DOMINOES_PATH,
    BOBTAIL_METHOD_PATH,
    BOBTAIL_YEARLINGS_PATH,
    YEARLINGS_BOBTAIL_PATH,
} from '../../../../constants/website'

export default {
    src,
    year: 2026,
    email: `info@bobtailyearlings.com`,
    bandUrl: BOBTAIL_YEARLINGS_PATH,
    projectUrl: YEARLINGS_BOBTAIL_PATH,
    onesheetUrl: `${YEARLINGS_BOBTAIL_PATH}/promo/onesheet`,
    band: `Bobtail Yearlings`,
    project: `Yearling's Bobtail`,
    description: `A double album and audio webcomic for the "*Ulysses* of rock albums."`,
    body: `
${'  ' || `
// TODO: Review and revise entire page.

Mention:
Our latest musical invention, which we call a "corkscrew modulation." Bennett will gladly offer a private demonstration to anyone giving serious thought to partnering with us.

Make it more like, how does this compete with AI?
`}

**How does this advance the art form?**

The audio webcomic explores the possibilities of combining music with visual storytelling, beyond what the conventional platforms allow.

Once our demo is known to the public, other bands will be encouraged to spend all *their* time and energy on the craft as well. This will lead to a rock renaissance!

**What else does our band have to offer?**

[*Bobtail Method*](${BOBTAIL_METHOD_PATH}) is a songwriting lesson book that teaches artists to write melodies and chords as a single, organic whole.

[*Bobtail Dominoes*](${BOBTAIL_DOMINOES_PATH}) is a tile game that trains musicians to visualize chordal space.

We've already written all the songs for the second album, as well as the melodies and chords for the third album. And they're some of our best!

[Amnesticism](https://digital.lib.washington.edu/researchworks/handle/1773/23566) is a theory for composing tonal music in multidimensional virtual spaces. We'll continue to develop it in the long term.
    `,
}
