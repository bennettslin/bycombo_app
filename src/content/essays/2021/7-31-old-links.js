import { BYCOMBO_DOMAIN } from '../../../constants/pages'

const getPdfLink = page => (
    `${BYCOMBO_DOMAIN}/docs/${page}.pdf`
)

export default `
This isn't an essay but rather a collection of old links. After my initial attempts to gain exposure for *Yearling's Bobtail* failed, I went back to school to study music formally. Since the band website was more or less defunct during this time, I treated it like a personal one and occasionally posted links to my school work. Some of these links ended up ranking pretty high in search results, which made me proud. It was the most validation the world had ever given me for any music-related efforts.

I'm currently revamping the band website, but I'd like to keep my search rankings! So here are those old links for posterity.

### General writings

Still stinging from the rejection of my "*Ulysses* of Rock Albums," I had many observations to make about indie rock's dysfunctions. I can't say whether these arguments ever held up. But I did try my best to stay gracious, assuming at the time that I was on my way to becoming a professor.

[Personal blog](http://bennettsamuellin.blogspot.com) (2011 to 2013)${'  '}

### Master's thesis

The work that became my Master's thesis. I came up with a new theory for composing music in multidimensional spaces that I call amnesticism. I'm not sure my advisor or anyone else really took it seriously. But in academia, unlike in indie rock, no one dismisses weird ideas offhand.

[Tonal Composition in Multidimensional Virtual Realms](https://digital.lib.washington.edu/researchworks/bitstream/handle/1773/23566/Lin_washington_0250O_12002.pdf) (Spring 2013)${'  '}
[Choose Your Own Cadenza](${getPdfLink('Cadenza_poster')}) (Fall 2011, presented at SMT)${'  '}
[Diminished Triads and Scale Networks](${getPdfLink('Scale_Network_paper')}) (Fall 2010)${'  '}
[Using Geometric Models](${getPdfLink('Cube_Dance_paper')}) (Spring 2010)${'  '}

### Music theory papers

Papers written for class assignments. I don't vouch for their quality.

##### University of Washington

[Schoenberg's Coalition Chess](${getPdfLink('Schoenberg_chess_paper')}) (Fall 2012)${'  '}
[Sondheim's *Pacific Overtures*](${getPdfLink('Sondheim_paper')}) (Spring 2012)${'  '}
[Stockhausen's *Formel*](${getPdfLink('Stockhausen_paper')}) (Fall 2011)

##### Hunter College, CUNY

[Janáček's Music Theories](${getPdfLink('Janacek_paper')}) (Fall 2009)${'  '}
[Bartók's Second Rhapsody](${getPdfLink('Bartok_paper')}) (Spring 2009)

### Publications

Confused about the lack of attention that *Yearling's Bobtail* was getting from the indie labels and music press, I wrote a songwriting book that distills my personal technique for composing melodies into a lesson plan, and I sent it out as a follow-up. I now know this is the kind of stunt that gets you taken even less seriously by indie rock, not more.

[*Bobtail Method*](${getPdfLink('Bobtail_Method')}) (2008)
`
