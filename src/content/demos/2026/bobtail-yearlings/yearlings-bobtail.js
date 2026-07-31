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
    description: `An audio webcomic for the "*Ulysses* of rock albums."`,
    body: `
${'  ' || `
// TODO: Review and revise entire page.

Mention:
Our latest musical invention, which we call a "corkscrew modulation." Bennett will gladly offer a private demonstration to anyone giving serious thought to partnering with us.

Make it more like, how does this compete with AI?
`}

**In an age of algorithms and AI, how does this advance the art form?**

- The audio webcomic combines music with visual storytelling using vector graphics, in a way that still requires human skills in coding, design, and illustration.
- The invention of "doublespeaker rhyme" 

**What else does our band have to offer?**

- [*Bobtail Method*](${BOBTAIL_METHOD_PATH}) is our songwriting lesson book that teaches artists to write melodies and chords as a single, organic whole.
- [*Bobtail Dominoes*](${BOBTAIL_DOMINOES_PATH}) is our tile game that trains musicians to visualize chordal space.
- The music and lyrics are already written for our next album, about the life of English biochemist Rosalind Franklin. Same with the melodies and chords for the one after.
- [Spatial amnesticism](https://digital.lib.washington.edu/researchworks/handle/1773/23566) is our theory for composing tonal music in multidimensional virtual spaces, which we'll continue to develop in the long term.

**What else can we offer to sweeten the deal?**

- For all those serious about working with us, we'll perform and give an analytical breakdown of "Love and Rockists," a song based on our theory of temporal amnesticism, in which a single chord progression steadily 
    `,
}
