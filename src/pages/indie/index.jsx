import React from 'react'
import PropTypes from 'prop-types'
import Page from '../../containers/Page'

const TITLE = `The problem with indie rock`
const DESCRIPTION = `How indie rock has made music worse…`

const Component = ({ sectionCounter = 0 }) => (
    <Page
        {...{
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
            body: `
# ${TITLE}

By the '90s, the major labels were the clear "bad guys": They'd simply sign a hundred no-names to unfair contracts, hoping for a Nirvana or Radiohead to break out. But the indie labels held to fair practices, by only signing artists who already *had* a fanbase and were thus empowered *not* to need a label. A decade later, the majors imploded— so the "good guys" won! Except now…

Bennett from the [Bobtail Yearlings](https://www.bobtailyearlings.com) here! I've spent half my life arguing that indie rock has made music *worse*, to no avail; Millennials refused to listen. The way they saw it: "The better your works, the further you get by hustling. By making *every* artist hustle, then, the indies ensure that we hear the *best*. So if you hate it, well… what does that say about your works?"

As such, I was left to struggle in a world that *wouldn't* [speak out](https://encyclopedia.ushmm.org/content/en/article/martin-niemoeller-first-they-came-for-the-socialists#:~:text=Then%20they%20came%20for%20the%20Jews,speak%20for%20me.) against indie rock. But now Gen Z is coming of age and dealing with the [same struggles](https://www.vox.com/culture/2024/2/1/24056883/tiktok-self-promotion-artist-career-how-to-build-following)— which suggests they're ready to listen. And of course… they'd *love* a Nirvana or Radiohead of their own. So let the interdependence revolution begin!

First, we raise *awareness*: Because "indie" means "good" to so many, few see the [decline of the arts](https://billderesiewicz.com/books/the-death-of-the-artist) for what it is— "indiefication." Instead, they'll grumble that the majors no longer nurture talent, no longer take risks… unaware that this is what the *indie* camp wanted, as it's how the *indies* work— by design! So if you just keep reading, hopefully I can set the record straight.

From there, it's an *action* problem: Rebelling against centralized institutions is easy, right? We just… break them up! But against a *de*-centralized system like indie rock, we must *build*— and this is far more difficult. After all, build… what, exactly? Fortunately, I've also spent half my life coming up with a plan:

**BYCombo's assembled bands will sacrifice serious chunks of lifetime to make historically canonical demos, which they'll show in a public registry to find business partners from a counterculture of interdependence.**

Okay, that's a mouthful! Let's break it down…

### The revolution will *not* be decentralized

**Why a counterculture?**

A counterculture shelters dangerous ideas, yet we haven't had one for some time. Meanwhile, despite indie rock's good intentions, music is now worse. But what if music is worse… *because* of these good intentions?! What if all this charitable support for *artists*… is bad for the *arts*?! These are dangerous ideas, yet they might be rock's only hope— so let's give them shelter.

**Why the historical canon?**

When fans charitably support an artist, they want *content*— namely, art that engages with them directly. But while content has an advantage over *past* art, it loses once it's in the past *itself*. To belong in the [historical canon](https://www.rollingstone.com/music/music-lists/100-greatest-artists-147446), then, today's artists must consciously *aim* to do so— because without this intent, they'll naturally settle for being content creators instead.

**Why bands?**

Indie rock encourages artists to retain their earnings— which, today, means having fewer bandmates, if any. But what competitive edge could a solo artist possibly have nowadays, to put them among the best for all *time*? From now until forever, if artists want to aim for the canon, they'll need to be greater than the sum of their parts— and in rock, this happens by forming *bands*.

**Why *assembled* bands?**

Has rock explored all the ways a band can come together? It might seem so— assuming they'll always form on their own, in a decentralized free-for-all. But if we ditch this notion? Then rock has barely scratched the surface.

What if artists hoping to form history-making bands could flock to a single hub from across the world? What if a cartoonist could also join— and bands, in turn, could think to look for one? Or suppose the next Kurt Cobain is a minority woman who's struggling to attract bandmates. What if she could ask to be judged free of unconscious bias?

With so many ways left to innovate in this space, there most certainly *are* canonical bands still to come. All that's needed is a centralized initiative like BYCombo to help them come together.

**Why interdependent partnerships?**

To aim for the canon, a band must develop exceptional strengths. But this isn't humanly possible unless they're allowed to stay weak in matters of business like marketing and distribution, where a *partner* can be more efficient. That is to say, history-making bands need to be *inter*-dependent, not *indie*-pendent; they need to *need* a business partner.

**Why demos?**

A demo shows what a work can be in the *future*, with a partner's help. This doesn't just free a band to take creative risks; it awakens the very thought to do so— with [doublespeaker rhyme](https://www.yearlingsbobtail.com/4-odin/?annotation=7) being my own go-to example. Yes, anyone today can self-release their works… but this is a *curse*, not a *blessing*! Past artists put out *demos*— and to rival them means doing likewise.

**Why a public registry?**

It takes time to review an ambitious demo— but the indie gatekeepers won't put in this effort, since *any* artist they pick will be charitably supported just the same. A canonical band's best bet, then, is to win over *elitist* gatekeepers who recognize the *folly* of indie rock's good intentions— and a public registry is where they'll find each other.

**Why serious chunks of lifetime?**

Low barriers to entry have allowed an endless stream of underwhelming artists to pour through, leading people to grow wary and lose interest. But indie rock has no way to reverse this damage, given its decentralized nature. To save rock, then, a centralized initiative like BYCombo must now step up to enforce a steep *cost* of entry.

This cost can't be arbitrary or artificial, so it can only be one thing: a serious chunk of lifetime. After all, a lifetime is all you truly have; once that chunk is gone, it's *gone*! Which means there's nothing more precious for a band to sacrifice that can earn the trust of business partners, discerning listeners, and future historians alike.

**And finally… how has indie rock made music worse?**

Here's an incomplete list of ways…

### ${++sectionCounter}. Recording adds another dimension

${'  ' || `
// TODO: Keep working on.

Put between romanticism and scarcity?

Remember to review other frontier sections.

Content doesn't become canon.

Make points from here:
A demo shows what a work can be in the *future*, with a partner's help. This doesn't just free a band to pursue visions they can't fully realize on their own; it awakens the very thought to even try.

Indie, in people's mind, is a catchall term for underground art that can afford to take risks. When, in reality, it formed in opposition to the mainstream culture that gate the world Nirvana and Radiohead. And as such, it has its own idiosyncratic values, favoring performances over recordings. Is there something superior about performances over recordings that's universally understood by discerning listeners? No, the indies favor performances because that's what their business model is based on, whether the majors' business model, at least historically, was based on recordings.
`}

New Romantics want to be rebel against digital content. Return to the days of local singer songwriters in coffee shops. Yet isn't a local performance just as forgettable, and replaceable with the next? In other words, a local performance is just analog content! Why is this the go-to solution for those who hope to rebel against digital content?

After all, the Beatles stopped touring after Rubber Soul, and the Beach Boys never performed Pet Sounds in its own time, freeing both bands to experiment with what is possible with studio recording without consideration for how they'd be recreated in live performance. As home recording became more affordable in the early '00s, I thought there would be a demo renaissance, as artists pursued visions they weren't able to fully realize on their own, and went to work on *Yearling's Bobtail*, where I performed all the instruments.

We caught the attention of an indie label founder, who was now doing A&R for a major label. Upon seeing a cobbled together live performance, he left and ignored all future emails. On his blog, he made a disparaging comment about "bedroom recordings." It was then that I learned how much the indie camp believes that only live music is real music, because real artists build their fanbase on live shows, perhaps because major label music is about getting big on the radio.

Yet the Beatles are the best band of all time, for an obvious reason: What's possible through recording will always surpass what can be recreated in live performance. Which means recording offers a permanent frontier to explore. Now with BYCombo, artists can now explore this frontier.

### ${++sectionCounter}. Nursed grievances wallow in confusion

In the '90s, "indie" referred to bands like Pavement, who'd *never* signed to a major label. As Gen X knows, then, Nirvana and Radiohead were *alternative*, not indie. To the younger generations, however, they *sound* indie— so now they are. But… this isn't a trivial mix-up! It's causing us to look for the *next* Nirvana and Radiohead in the wrong places. How did we get confused?

Simply put, indie rock doesn't know what it stands *for*, only whom it stands *against*: the major labels and their middlemen. Like MAGA, it's a culture of anti-elitist grievance— and so it shares the same tolerance for confusion. After all, who cares if those on your side are confused in their beliefs, when this is what fires them up to attack your common enemy?

For example, even after Goatse proved that the Internet caters to the lowest common denominator… the indie camp concluded that going viral is the new [word-of-mouth](https://pitchfork.com/reviews/albums/1811-clap-your-hands-say-yeah/#:~:text=Indie%20rock%20has%20received,supposed%20to%20work!) buzz?! And when Amanda Palmer crowdfunded her way to a million dollars upon leaving a major label… this was seen as proof that artists [*don't* benefit](https://www.theguardian.com/media/2012/sep/26/amanda-palmer-future-of-music#:~:text=Palmer%20has%20managed%20to%20raise,Universal%27s%20Roadrunner%20imprint) from a label deal?!

In every early example of online success, chance or privilege played a clear role. Yet the indie pundits were so eager to "own" the majors, they chose to downplay this point. Well, it worked— the Internet came to be seen as the great equalizer. Except now, if an indie artist struggles to succeed online… the public can only assume their music is bad!

As with MAGA, then, indie rock's tolerance for confusion ends up hurting its own. So yes, the majors did many things wrong— but they got Nirvana and Radiohead *right*! How? With BYCombo, you can now join a movement that's willing to ask— because it nurses no grievances.

### ${++sectionCounter}. Populism trampled the underground

We all respect those '80s [underground bands](https://www.hachettebookgroup.com/titles/michael-azerrad/our-band-could-be-your-life/9780316247184) who came up from the local scenes, don't we? "Of course! They were chosen by the *people*— not by the *elites*." Well, actually… this is a revisionist explanation. Back then, the people and the elites were understood to be on the same side— the mainstream— while the underground sheltered those who *subverted* the people's will.

In the '90s, though, we [started calling](https://books.google.com/ngrams/graph?content=%22+indie+rock+%22%2C%22+underground+rock+%22&year_start=1980&year_end=2000) such bands "indie," to affirm that they *didn't* sign to a major label. Yet unlike being underground, being indie *can* be a universal ideal— so once this was made possible by the Internet, the indie camp declared that it *should* be. Now anyone who uses online tools to forgo the majors is called an indie artist… even those with [mainstream tastes](https://culture.ghost.io/links-on-status-and-culture-january-2024/#:~:text=Now%20with%20the,crowd%2Dpleasing%20mainstream%20tastes.)!

But… given that *most* people belong to the mainstream, artists who cater to such tastes hold a winning advantage in building a fanbase on their own. As a result, they're the ones who get picked by the indie gatekeepers! And since some do resemble subversive artists of the *past*— while we're never shown what subversion would look like *otherwise*— all is assumed to be well.

So what happens now, if *your* respect for the underground was always rooted in the *aesthetics* of subverting the mainstream, rather than in the *logistics* of forgoing the majors? Why, BYCombo can expose you to *elitist* gatekeepers— the *only* chance left for subversive art in an online world!

### ${++sectionCounter}. The grassroots is now a lottery

There's another reason we respect those '80s underground bands: It feels like their success was *ensured*. That is to say, they showed up to work each day for untold years— unlike a one-hit wonder, who simply signed to a major label for a single chance at exposure… and then "won the lottery," so to speak.

But thanks to the Internet, today's "lottery players" get unlimited chances. Moreover, rather than conspire with the majors to make a radio hit, they can work on their own to get picked up by the algorithms— which reward the most popular works. So now they're chosen by the people, *not* by the elites… making them indie artists in good faith!

All is well, then, according to the indie camp: Online, the grassroots remains a *populist* domain. It's just no longer a *meritocratic* one— now that little but chance separates the few who make it from the many who don't. Still… what if *you* were hoping to ensure your success? Then keep working on your craft for untold years— and let BYCombo help you partner with the elites!

### ${++sectionCounter}. Talent wants a path to stardom

${'  ' || `
// TODO: Revise. And the reverse is true. More to the point…

Actually, move this after charitable support and before peer review. Then talk about reverse point.
`}

By the '00s, the major labels had gutted the local scenes in their search for the next superstars. So when the Internet promised us a vibrant [long tail](https://www.honest-broker.com/p/where-did-the-long-tail-go) decoupled from the rat race for stardom, indie rock went all in: Any artist could now flourish on the fringes! Yet today… superstars are bigger than ever, while indie artists have *lost* cultural relevance. Why is this?

For starters, stardom *isn't* caused by corporate greed, but by our own social nature. Since it's hard to say which songs are best, we end up just liking what others like— and they do the same! As such, popularity is a [complex system](https://en.wikipedia.org/wiki/Complex_system) ruled by [power laws](https://en.wikipedia.org/wiki/Power_law), where any random boost can snowball into a winning advantage— and *this* is how unworthy artists end up as superstars.

Yet stardom is also the rightful outcome for the *most* worthy artists, who naturally hope for it— even if, like Kurt Cobain, they won't admit it. So the indie camp got it backward here as well: The majors *didn't* exploit the local scenes. They simply saw the indie labels as farm teams— as did those '90s alternative bands, who signed with the indies for this very reason!

By blocking access to the majors, then, indie rock *didn't* help the most worthy artists flourish; it caused them to flee! Luckily, BYCombo is here to build a *new* path to stardom. Because, let's face it— once you go above and beyond to make the best art, you *won't* settle for a [thousand true fans](https://kk.org/thetechnium/1000-true-fans). And if superstars are inevitable… then why can't *you* get a chance to be one?

### ${++sectionCounter}. Charitable support starts an arms race

In the past, the [only artists](https://en.wikipedia.org/wiki/Outsider_music) we *truly* supported were amateurs, recluses, the mentally ill… Yet today's fans use the word "support" to show loyalty to *any* artist— even a superstar! How did this happen? It began when indie rock conflated personal taste with high-minded endowment for the arts, making every fan a philanthropist— a "phlan," maybe?

Unlike an arts foundation, though, phlans *don't* need to hold strict standards or be aware of unconscious bias. Their charitable support for the underdog— *any* underdog— comes from good intentions and thus can't be questioned. But then… this *isn't* just a leg up, is it? It's a winning advantage! And unlike amateurs or the mentally ill, indie artists *do* vie for all the same honors.

So indie rock set off a chain reaction, forcing the next tier of artists to beg for support as well, and then the next… leading to where we are today, with even superstars angling to be seen as underdogs. Which explains why Millennials never gave us a Shaggs or Daniel Johnston of their own: All their charitable impulses went toward defending the *least* helpless!

And yet, this obviously can't end well. We don't support artists of the *past*— and neither will future audiences. So why stoop to being a charity case today, just to be swept onto an ash heap tomorrow? With BYCombo, you can make history the *right* way— by needing no defense to begin with.

### ${++sectionCounter}. History is made through peer review

Here's the thing: Most artists in the historical canon were superstars in their own day. But indie rock's bet is on the long tail— so how is *any* indie artist expected to make history? The critics have a plan: Pick one who typifies the underdog of our times, then rally around them. After all, who wouldn't root for an underdog to win?

Um… all of us other artists who *weren't* picked, that's who! To be clear, we're not [crabs in a bucket](https://en.wikipedia.org/wiki/Crab_mentality). But if a critical darling strikes us as a "lottery winner," we won't pretend otherwise. And this gets at why [critics are so bad](https://www.honest-broker.com/p/why-did-the-beatles-get-so-many-bad) at making timeless judgments: They never consider how things look to us *other* artists.

Because we're invested in the creative process ourselves, we commit fewer false positives: We know when talents deemed notable are actually par for the course. And we commit fewer false *negatives*: We'll give crazy new ideas a chance, knowing the courage it takes to put them into action. In short, what historians will see in *time*… [other artists](https://www.gsb.stanford.edu/insights/managers-are-not-best-judge-creative-ideas#:~:text=%E2%80%9CWhen%20we%20generate,to%20convergent%20thinking.%E2%80%9D) come closest to seeing *today*.

So to make history without achieving stardom, ignore the critics! Instead, your talents must inspire the envy of fellow *artists*. Which is why BYCombo includes you in a community of peers who'll keep your standards high.

### ${++sectionCounter}. Cultural chauvinism can only be justified

Growing up as a second-generation immigrant, I knew early on that other countries had their [own rock canons](https://en.wikipedia.org/wiki/Visual_kei). Yet because they clearly looked up to ours— the English-speaking world's— we cared little of theirs. Which made ours *the* rock canon! Especially since any band of theirs who *could* rival us, like ABBA… simply joined us instead.

So I've long understood that, to belong in the canon next to the Beatles, my band needs to be one of the best in the *world*. But the indie camp scorns my way of thinking, saying it reeks of cultural chauvinism: "Who are we to think we're better than other countries? Let a thousand canons bloom, with ours being just one of them!"

Yet… this indie camp will then complain that the Rock and Roll Hall of Fame doesn't give [recent artists](https://uproxx.com/indie/rock-and-roll-hall-of-fame-bias-against-alt-indie-rock) a fair chance to get in. But unlike past inductees, today's indie artists *aren't* better than their foreign counterparts— who have *no* chance! So they're *not* helping to justify calling ours *the* rock canon… in which case, why would they belong in *the* Rock Hall?

Let's be honest, we're cultural chauvinists either way; all we can do is not be hypocrites as well. Thankfully, BYCombo is here to make us the world's best once more, in the only way now possible— by matching you with artists from other countries, who *could* rival you… but will join your band instead.

### ${++sectionCounter}. Timeless works have standalone appeal

To get radio airplay in the '90s, alternative bands had to win over listeners who knew nothing about them— and the best did this by crafting chords and melodies that [hook you in](https://youtu.be/7bK5EPjGri4) with no further context. Being an unpopular teen at the time, I knew my only hope was to pull off the same. So I studied any band whose talents I envied, dreaming that one day I'd teach others.

A while back, I sent copies of my songwriting book [*Bobtail Method*](https://bobtailmethod.com) to all the indie labels; I later did the same with my musical tile game [*Bobtail Dominoes*](https://www.bobtaildominoes.com). "The best chords and melodies come through study and practice," I pointed out— but they weren't interested. In time I figured out why: It's not that they doubted my point. They just don't value music as a *craft* to begin with!

After losing too many radio-friendly bands to the major labels, the indies learned to bypass radio altogether by appealing to critics and local fans. But critics want context that can be discussed at length, while local fans— now online— like to engage directly with the artist. So both, in their own way, are drawn more to an artist's identity than to a well-crafted [musical hook](https://youtu.be/HWMsWO0vPa8).

Yet the past works we love most [*don't* require us](https://youtu.be/UihGpf7lCM8?t=11) to care about the artists— and future audiences will judge the works of *our* times likewise. There's no way around it: To be timeless, your music must hook in the listener on its *own*. So BYCombo gives you all the time you need to practice the craft.

### ${++sectionCounter}. Excellence has a steep opportunity cost

Thanks to indie rock, other countries now care little about our rock canon, just as we've always ignored theirs. Which makes sense: Millennials are an easy audience to please, so indie artists never need to make the *best* art. But can't they try anyway, to rival *past* artists who met the high expectations of *previous* generations? Well, let's examine their options.

They can hustle to build a fanbase on their own— which yields *compound* returns, as each fan brings in new fans. Plus, with no talent scouts trying to discover them, it's a huge disadvantage *not* to. *Or*— they can go above and beyond to make the best art, which yields *diminishing* returns for every *increase* in effort. Yet, by definition, it *isn't* a disadvantage simply not to!

It's obvious, then, why music was better in the past: Before the Internet, the *only* option was to make the best art. So… what if a band *today* tried to do just that? Add up the gains, subtract the [opportunity costs](https://en.wikipedia.org/wiki/Opportunity_cost), and the math is clear: They'd end up the biggest losers. No wonder we lost the historical canon! But now with BYCombo, you can be discovered for bringing it back.

### ${++sectionCounter}. Serendipity rewards the idle mind

${'  ' || `
// TODO: Review.
`}

Are you unconvinced that music is now worse? Then pick any of the latest artists, and ask: Whatever their best work might be, could they *guarantee* us another one just as good? I suspect we'll agree: The answer is yes. That is to say, even the best works today are what I call "workhorse art"— namely, art that simply *matches* the talents of those who make them.

By contrast, could Dolly Parton *reliably* compose one "Jolene" after another? Or [Stephen Sondheim](https://www.bobtailyearlings.com/docs/Sondheim_paper.pdf), "[Someone in a Tree](https://youtu.be/JpoKuNyVNhQ)"? It's doubtful. These works are what I call "windfall art"— namely, art that's even *better* than those who make them. In fact, they may surpass what seems to be humanly achievable at *all*— and for this reason, they're the kind that fellow artists envy most.

Of course, the best artists *are* human— so how are such works possible? It's because they *don't* benefit from talents alone, but *also* from creative insights that emerge from the unconscious mind and can't be summoned at will. In other words, spend enough time letting your thoughts drift in the shower, or daydreaming out of boredom… and the next "Jolene" just might be *yours*!

But this can't happen if you're always [context switching](https://en.wikipedia.org/wiki/Human_multitasking)— which explains why "indiefication" has made music worse. Indie artists *endlessly* switch between multiple hats: the promoter hat, the publicist hat… So keep your artist hat on, and have a business partner wear the others. Because *you* want your works to be better than you— and so does BYCombo.

### ${++sectionCounter}. Creativity gets its chance from the clueless

In the past, the indie gatekeepers stayed close to the local scenes, making them both "in the know" and "one of us." And now online, they offer the same assurance: What they like is what others like *us* have liked— which means it's what *we'll* like. What's not to like? Well… in *my* case… this is precisely what led them to reject *Yearling's Bobtail*— my "*Ulysses* of rock albums"!

What confused me is that I'd explicitly set out to make a work of art whose creativity [*can't* be disputed](https://www.yearlingsbobtail.com/16-cremated/?annotation=4). Only later did it hit me: If a gatekeeper is one of *us*, then this is the *last* thing they'd want— since it's the last thing *we'd* want. Our human nature is to [*dis*-like creativity](https://slate.com/technology/2013/12/creativity-is-rejected-teachers-and-bosses-dont-value-out-of-the-box-thinking.html#:~:text=It%E2%80%99s%20all%20a,their%20insistence%20otherwise.); we just don't realize this, because whatever it is we *do* like… we simply call *that* the thing [that's creative](https://marginalrevolution.com/marginalrevolution/2011/12/teachers-dont-like-creative-students.html#:~:text=What%20the%20paper,are%20actually%20like.)!

Creative ideas are unfamiliar, and this makes us uncomfortable. Now, the corporate suits just ignore the discomfort, since it's *all* unfamiliar to them. But those in the know pride themselves on their hard-won instincts, so they interpret the discomfort as a sincere warning from their gut. Ironically, then, as [Frank Zappa noted](https://youtu.be/xP4wsURn3rw), this makes them *worse* at discovering creativity!

It's no surprise, then, that history's pioneering works were often backed by those with the [*least* experience](https://youtu.be/AClN5X0eEvI) in their respective genres— who *didn't* know what the people wanted, and thus *weren't* led astray! Let's face it, the best partners take pride in doing good business, *not* in knowing great art. Now with BYCombo, you can find one to back you once again.

### ${++sectionCounter}. Modest standing leads to risk aversion

In his book [*Originals*](https://adamgrant.net/book/originals), Adam Grant points out that in any hierarchy, the ones eager to take risks are those securely perched at the top, as well as those at the bottom with nothing to lose. The ones in the middle, by contrast, are the most risk-*averse*. Which explains why indie rock is so unoriginal: Its artists *seek* greater standing while its labels *cede* it— so *no* one takes any risks!

In the past, artists lacked all means to engage with the public on their own, freeing them to explore at will. But today, indie artists build a fanbase from day one, leaving them reluctant to experiment for fear of losing their fans.

Meanwhile, because the indie labels have just enough standing to lose, they only make safe bets— and the *safest* bet is to deliver what the people already want. But… this creates an echo chamber! Even worse, every revolution gets nipped in the bud, because the [people *never* ask](https://www.goodreads.com/quotes/988332) for what they can't envision on their own.

Revolutions may *start* with artists, but they're *spread* by business partners, whose know-how is needed to win over the public. This is why BYCombo lets you explore and experiment, while you have no fans to lose: It makes you the *smartest* bet— for those perched high enough to see it.

### ${++sectionCounter}. Disintermediation is a middleman's dream

To help artists cut out the middleman, indie rock provides them with tools to do the middleman's job for themselves. Of course, the Bizarro way would be to empower *middlemen* to do the *artist's* job. Absurd, right? Yet the outcome would be exactly the same, with each person now doing the job of both artist *and* middleman. So indie rock… is its own Bizarro world!

And here's more absurdity: Whereas artists are loved for doing what we all dream to do, middlemen are hated for doing work that few others enjoy. In this new hybrid role, then, an artist *has* to be their own middleman— but a middleman *gets* to be their own artist. So a world without middlemen… is a dream of the *middling* artist, who'd otherwise *be* a middleman!

Let's get this out of the way: The best artists *respect* the middleman. After all, being the best at your job makes it an awful waste to do anyone else's— and knowing that your own job is much harder than it looks, you have to assume the same of everyone else's. Plus, if you're one of the best yourself, then you get your pick of the best partners. We [learned all this](https://en.wikipedia.org/wiki/Division_of_labor) in middle school!

Sadly, young people never question today's auto-Bizarro world, since it's all they've ever known. But I came of age *before* indie rock took over, so I've only *ever* dreamt of having one job as an artist— seeing that there's no other way to make the best art! Now with BYCombo, this dream can be yours as well.

### ${++sectionCounter}. Competitive self-reliance favors privilege

Want even more absurdity? A [wealthy artist](https://knowyourmeme.com/photos/2316349-parent-names-are-blue-on-wikipedia) can just pay *others* to do the middleman's job for them… and, well, who better to hire than a freelance middleman?! So in the end, indie rock has done little more than "privatize" access to business deals that were once "public"— to the benefit of the privileged. How did this happen?

Simply put, indie rock is widely seen as a [do-it-yourself](https://en.wikipedia.org/wiki/Do_it_yourself) movement— the kind that fosters *cooperative* self-reliance by instilling love for the craft. As such, it meets with no opposition and enjoys all the same goodwill. Now, this *would* be fitting… if indie artists only made music for their *own* fulfillment.

But being indie means gaining the *public's* attention, and this is a zero-sum game: When attention is paid to one artist, it *isn't* being paid to the rest. So the indie camp is really about *competitive* self-reliance! Like libertarians in politics, they want "doing it yourself" to be how you even survive at *all*— and having privilege is the [greatest predictor](https://www.cracked.com/article_40871_penn-jillette-wants-to-talk-it-all-out.html#:~:text=Many%20times%20when,100%20percent%20accurate.) of this belief.

The problem, then, is that indie rock's cultural libertarianism is a *partisan* ideal that gets mistaken as *universal*. So when a band struggles to hustle because it's a poor fit for their circumstances, they're told to suck it up and try harder. But with BYCombo, there's now an opposition party that upholds the interdependence you want— out of a shared love for the craft.

### ${++sectionCounter}. Mutual reliance creates wealth

In game theory, the [stag hunt](https://en.wikipedia.org/wiki/Stag_hunt) is a game in which you and another player must decide, each on your own, whether to hunt hares separately, or team up and hunt a stag together. The stag yields far more meat, even when split two ways. But if you trust the other player and go for the stag— only for *them* to doubt *you* and thus stick with hares— you'll end up with nothing.

The [richest nations](https://slate.com/culture/2007/09/the-obscure-game-theory-problem-that-explains-why-rich-countries-are-rich.html#:~:text=the%20difference%20between,and%20poor%20ones.) build systems that allow their citizens to trust each other and confidently "hunt the stag," creating more wealth for all. The reverse is also true: North Korea, a poor nation, leaves its citizens to "hunt hares"— and fittingly, its [state ideology](https://en.wikipedia.org/wiki/Juche) translates to "self-reliance." Well, now you know where this is going: Indie rock… is the North Korea of music!

Indie artists work hard *not* to need a label, and will do so even [when signed](https://pitchfork.com/news/34979-amanda-palmer-tells-roadrunner-records-please-drop-me#:~:text=I've%20built%20up,functioning%20independently%20anyway.) to one— on the label's dime! So labels have learned to doubt artists as well… destroying the mutual reliance needed to create cultural wealth. Yet there's hope: Much like South Korea shows what North Korea can one day become, the past proves that rock can be interdependent once again!

BYCombo just needs artists like you, who *want* to need a label, to join with the Bobtail Yearlings and go for the stag, over and over— despite ending up with nothing, again and again— until business partners finally reciprocate the courage to team up with us. Yes, it's the definition of insanity… but to stick with hares is to live in cultural poverty forever. So how about it?

### ${++sectionCounter}. Democratization causes noise pollution

To "democratize" Twitter, Elon Musk made the blue checkmark available to all paid accounts; he wanted *everyone* to have a voice, not just those verified under [legacy criteria](https://twitter.com/elonmusk/status/1587498907336118274). Well, guess who else thinks this way: the indie camp! They want *every* artist to be heard, not just those "verified" by a label— and so they encourage the use of online tools that offer all the same benefits.

But this creates its own problems, doesn't it? Once a mark of verification is easy to attain, it ceases to be an [honest signal](https://en.wikipedia.org/wiki/Signaling_game); we can no longer assume that those who have it are worth hearing from. Worse, the field gets "polluted" by *dis*-honest signaling from the *least* worthy, who alone can fully invest in the signal itself— rather than in the worth being verified!

To complicate matters, pollution is a [collective action problem](https://en.wikipedia.org/wiki/Collective_action_problem): It's caused by individuals acting in their own interest— so the solution *has* to come from the top down, through centralized planning. But the indie camp's thinking is bottom up; under their watch, change can *only* take place at the grassroots. Which means they'll never clean up this mess they've created…

What happens now, then, if you aspire to be *most* worthy? Why, you can join BYCombo— a collective that verifies your worth from the top down! Because what's a more honest signal, than to sacrifice a serious chunk of lifetime?

### ${++sectionCounter}. Modern audiences leave quietly

"When I play sports, it doesn't just benefit *me*; it also benefits *you*— to watch me. Yet I don't even make minimum wage… while superstars earn millions! How is that fair? So let's get rid of these overpaid talent scouts, and empower indie athletes like me to do what we love for a living. Who'd object?"

Um… *we* would— the audience! We only want the *best* athletes— and it's the talent scout's job to find them, not ours. If "indie sports" took over, then, we'd turn to serial dramas or video games, and only come back for "classic sports" reruns. Everyone gets this, right? Okay, well… indie rock *did* take over. So how come no one can figure out why the audience for music [is leaving](https://youtu.be/Ag4iFa6E_yY)?!

But there's hope: While Millennials were active creators from day one, Gen Z reverted to being passive consumers once the Internet consolidated. As with Gen X, then, Gen Z's artists empathize foremost with the *audience*— having first been one themselves. So today's pro-*artist* way of thinking might just be a generational fluke… and *not* the future of music.

Still, how do we become pro-*audience* once more? It's simple: We admit that audiences only want the *best* artists! This is why BYCombo tells you to make the best *art*— namely, what *you'd* most want to hear if you were anyone else, choosing from all that's come before and all else that's out there.

### ${++sectionCounter}. Hustlers lack a theory of future minds

Nick Drake was ignored in his own time— yet the next generation made him known to history. Did they need to see him hustle? No, they merely judged his works. So there's a lesson here for all gatekeepers: To discover artists that future audiences will want to *re*-discover, just… [think like](https://en.wikipedia.org/wiki/Theory_of_mind) a future audience.

In the past, the major labels did just that: Their talent scouts would sign any artist on the strength of a demo— even one with no fanbase, like Nick Drake. But indie rock taught Millennials to hustle, and hustlers work to *get* known— whether or not they *deserve* to be. As a result, the notion is now vulgar that anyone could ever be *made* known… simply by deserving to be.

Let's imagine, though, that as a musician devoted to your craft, you *refuse* to hustle. The thought makes you feel awful, like being a [pickup artist](https://en.wikipedia.org/wiki/Pickup_artist) would. Sure, this approach can work… but *should* it? And if women have learned to guard against negging, then why wouldn't fans do the same against artists milking free labor out of parasocial exchanges?

So instead, you strive to be what a future audience— or romantic partner!— *would* want you to be, based on theories that you revise and refine over time. Which… is also more fun and rewarding for *you*, right? Yet in my experience… the indie gatekeepers can't sympathize. They're loyal to the hustlers— having hustled to get where they are themselves!

But why would Gen Z— and beyond— side with past gatekeepers who *didn't* care what they'd want, over past artists who *did*? In this light, they just might dismiss *all* of indie rock as disposable content! Luckily, BYCombo can make *your* art worthy of rediscovery— by letting you think like a future audience.

### ${++sectionCounter}. Hungry outsiders aim for the canon

Who foresaw indie rock's final stage as a trust fund playground? We did— women and minorities— which is why *we've* never started a movement to compete on self-reliance. And hip hop is no exception; rappers *proudly* rely on [labels and producers](https://genius.com/Dr-dre-nuthin-but-a-g-thang-lyrics#:~:text=Ain%27t%20nothin%27%20but,that%20pays%20me). When they boast of having hustled, they're saying, "Hey, I hustled *too*!" It's to ensure that self-reliance means *nothing*.

Yet despite the poor fit, indie rock sure is eager of late to hand us the reins! Why? Because, after two decades of being no better than a foreign canon, it's in *decline*— and desperate to regain its cultural relevance. So women and minorities are being nudged onto a [glass cliff](https://en.wikipedia.org/wiki/Glass_cliff)…

No thanks! Remember, rock and roll was founded by poor Blacks and queers, then taken further by rural Southerners, Midwestern Jews, working-class Brits… In short, it's a history of hungry outsiders. Which means women and minorities should naturally be aiming for the *historical* canon— and today we *would* be, if indie rock hadn't intervened.

Like those outsiders before us, we need to be the *most* original, the *most* talented… but this can only happen if we're allowed to depend on business partners. Hip hop gets this, which is why it *hasn't* declined; Kendrick Lamar won a [Pulitzer Prize](https://www.pulitzer.org/winners/kendrick-lamar)! Now BYCombo gives you the same chances— as a band.

### ${++sectionCounter}. Insiders see cronyism as camaraderie

While indie labels do care about the bottom line, it isn't to *make* money; it's merely to ensure they're not *losing* any. Almost every one of them began as a circle of friends who just wanted to support each other's bands— and that's how they still see themselves at heart. What's not to love? Well…

The issue is that these labels are run by society's most privileged groups— and to perpetuate inequality, the privileged *don't* need to harm others. They *only* need to [help their own](https://hbr.org/2014/01/white-people-do-good-things-for-one-another-and-thats-bad-for-hiring)— which is what any circle of friends will do! So indie rock's inequality can't be fixed at the root; its White male gatekeepers just have to be more inclusive in whom they accept as their own.

But so far, their efforts have only helped women, not us minorities— or *male* minorities, anyway. Why? Because our struggles *aren't* the same. Minorities face stereotypes of [low *warmth*](https://en.wikipedia.org/wiki/Stereotype_content_model); and women, of low *competence*. Yet social justice, when self-enforced, *only* fixes misjudgments of competence; a circle of friends has every right to feel more warmly toward their own.

You'll notice, then, that we minorities *aren't* ones to begrudge a business partner their profit motive! To the contrary, making money for those who wouldn't otherwise warm to us has *always* been our ticket to acceptance— and [not *just* ours](https://genius.com/Eminem-white-america-lyrics#:~:text=When%20I%20was,under%20his%20ass). Now with BYCombo, this ticket can be yours once again.

### ${++sectionCounter}. Paid dues shrivel the noblest spirits

Mr. Rogers told us to [look for the helpers](https://www.goodreads.com/quotes/198594) when times are bad. Well, times are bad in rock now… so why is no one helping? Especially from the indie camp— the "good guys"! As for me? Back in the day, I'd have *gladly* helped to fix this broken culture; it's just that, being a nobody, I needed others to help *me* first. Yet while everyone in indie rock is nice enough… no one *helps*.

So I took a coding bootcamp, and for [seven years](https://www.bobtailyearlings.com/writings/2022/6/zillow-farewell-message), I worked days as a coder and nights on my audio webcomic. When I came back to music, I once again heard indie artists speak of paying their dues— to justify, let's say, touring at a loss. Except now it threw me, because in tech, "paid dues" is a synonym for "fake work"— and outsiders who see this, disrupt cultures that don't.

But… suddenly indie rock's lack of helpers made perfect sense! If paid dues are worthless outside the one culture that honors them, then of *course* those who've paid them will vote to keep the culture as it is— in all its brokenness.

Moreover, once someone has wasted their best years building up symbolic credentials rather than enviable talents, they can never feel secure enough to let others surpass them. So the only newcomers they'll welcome are those willing to squander even *more* potential. But these newcomers will then feel even *less* secure— thus widening the [vicious circle](https://www.goodreads.com/quotes/391717) of brokenness.

Which is why it took an outsider like myself to start BYCombo, driven by an urge to help future bands like yours surpass mine. My solution is so simple, I doubt I'm the first to think of it. Rather, I'm just the first one who's secure enough to *want* it— having never paid indie rock's dues myself.

### ${++sectionCounter}. Countercultures shelter today's losers

Rappers love to bash the "[wack MC](https://genius.com/Doug-e-fresh-and-the-get-fresh-crew-la-di-da-di-lyrics#:~:text=Because%2C%20um%2C%20I%27ve,the%20best%2C%20yeah)"; as outsiders, they know that kindness to the audience means cruelty to worse artists. But the indie gatekeepers *can't* be cruel; they're "good guys"! So rather than weed you out for being wack— a harsh indictment of who you *are*— they merely dismiss you as a hobbyist if you didn't hustle— a plain measure of whether you've paid your dues.

Yet as W. David Marx observes in his book [*Status and Culture*](https://www.penguinrandomhouse.com/books/659558/status-and-culture-by-w-david-marx), every culture creates a status hierarchy of its own. Which means the one created by indie rock *isn't* the same as, let's say, that of the '90s alternative culture from which Radiohead emerged— even if they overlap. There are new winners, but also new losers— such as "hobbyists," who now sit at the bottom.

And this should concern us, since Radiohead… were the ultimate hobbyists! They'd never hustled in their *lives*. Upon signing to a major label based on a demo, they were told to [change their name](https://radiohead.fandom.com/wiki/On_a_Friday#:~:text=After%20a%20chance,song%20%22Radio%20Head%22.) from On a Friday— and they *did*, to no confusion, as they were so little known in the local scene. There wasn't any recourse: The indie labels didn't want them!

But can't *today's* indies learn to sign the *next* On a Friday? No… A culture's status hierarchy is self-reinforcing and can't be upended from *within*. Think about it: Once status has to come from hustling, then hustlers become high status— and vice versa. So indie rock will always be an "indieocracy," as its name implies— a system ruled by hustlers, who get *themselves* known.

Still, the losers have one recourse: to start a *counter*-culture… that just might let them be [*tomorrow's* winners](https://genius.com/Bob-dylan-the-times-they-are-a-changin-lyrics#:~:text=And%20don%27t%20speak,they%20are%20a%2Dchangin%27)! Yet none has arisen, because: "Why counter the good guys?" Luckily, as this century's biggest loser, I've spent half my life plotting to start one! Now with BYCombo, you too can hope to be the next Radiohead, by betting it all on the craft— your "hobby."

### ${++sectionCounter}. Independence breeds homogeneity

As their party devolved into "indieocracy," many Republicans thought they'd resist; instead, most learned to embrace the hustlers who'd now taken over— sometimes to their own surprise. Likewise, every indie gatekeeper I've met with, despite being impressed by [my projects](https://digital.lib.washington.edu/researchworks/handle/1773/23566), ended up dismissing me as a hobbyist— even as some looked surprised by their own decision.

Which tells us: Indieocracy can never *feel* right. Its rules for who gets to win, and who must lose, will always *seem* off. But to get along… you must [go along](https://culture.ghost.io/why-do-we-provide-status-to-others/#:~:text=the%20most%20basic,into%20pure%20dominance.). Still, I had to wonder: Shouldn't I have met an indie gatekeeper by now who'd rather just *leave*, as I did? Then one day it clicked: I *haven't* met a hundred of them. I've only met with the same one— a hundred times over!

To be interdependent, you need partners who are strong where you're weak, and vice versa— which means you value others who are as lopsided as you, but in different ways. Those who want independence, however, can have no real weaknesses, and thus no real strengths. They need to be well-rounded— and this leads them all to converge on a single way of thinking.

So don't be fooled by indie rock's belated embrace of women and minorities! It doesn't add up to any further diversity in *thought*. But BYCombo lets you find bandmates and business partners who think differently… and who'll value *you* for doing the same.

### ${++sectionCounter}. Interdependence guards against prejudice

Indie rock is an ideology more than anything else— and ideologies transcend time. So why couldn't rock be indie from the *beginning*? Imagine, then, that we take a time machine back to the '50s and announce: "Artists, as your own best advocate, you'll now be judged by how far you get on your *own*, without the help of a business partner. The playing field is finally level!"

Every Black artist would stare glumly at us. Why? Because, back then, they *needed* White partners to advocate on their behalf. Indie rock's rules would work like an artistic [poll tax](https://en.wikipedia.org/wiki/Poll_taxes_in_the_United_States), shutting them out in *effect*— without admitting to this *intent*. By bringing indie rock to the '50s, then… we'd look like racists. But this *wasn't* our intent! So where did we go wrong?

It's simple: Given its decentralized nature, indie rock can't guard against the prejudices of its times. It can only *reflect* them— and the '50s were openly racist! Well, is society free of prejudice today? Of course not— which is why BYCombo lets you find partners to advocate on your behalf. Because, if *you* see interdependence as the great equalizer… who is anyone else to argue?

### ${++sectionCounter}. Underdogs are supremacists in effect

Perhaps my arguments against indie rock seem moot now. After all, didn't [poptimism defeat rockism](https://en.wikipedia.org/wiki/Rockism_and_poptimism) a decade ago? Well, no. It was the *indie* camp who killed rock as a genre. Then, believing the death to be natural, many in this camp switched to pop. So poptimism… is just indie rock's good intentions brought over to the pop genre!

Ignore the superficial differences in sound: Indie rock and poptimism are both underdog movements that supplanted a previous culture founded by outsiders. For the former, it was the classic rock whose lineage traced to Sister Rosetta Tharpe; and for the latter, the classic pop defined by Tin Pan Alley's East European immigrants.

In a world where outsiders try much harder, to be much better, both indie rock and poptimism protect the underdog by stifling the public's interest in the competition. But if the underdog *isn't* the best of their times… then they'll also need to be *remembered* as an underdog. Yet future historians will know of every advantage they were given that was denied to the outsider!

This… *can't* be a viable way to make history. Because what historical figures from *our* past require the same cognitive dissonance of *us*? I can only think of the Ku Klux Klan and their ilk— America's original underdogs, who fought to suppress America's [original outsiders](https://www.goodreads.com/quotes/9648466-you-ve-got-to-be-twice-as-good-to-get-half)! Which doesn't bode well for indie rock's legacy… or poptimism's future…

Yet underdog movements will never go away, because to be seen as an underdog is a *privilege*— and the privileged will always find ways to benefit themselves. But as long as you're hungry enough to try much harder, to be much better, BYCombo can offer a lasting *counter*-movement— the new "rockism," maybe?

### ${++sectionCounter}. Fair practices follow the numbers

Perhaps my arguments against indie rock seem misplaced. After all, aren't the tech platforms to blame? Well, sure. But who put them in power? It was the *indie* camp. And for good reason: Every new technology in the '00s— digital downloads, streaming media, crowdfunding— was ultimately about bringing indie rock's good intentions to the Internet!

In the past, a major label would bet on visions that other labels *didn't* see— like, let's say, a regional style erupting into a global revolution. But this left artists powerless to negotiate; they couldn't pit one label against another, and a vision by itself is worth nothing. As a result, they often had to accept [unfair terms](https://thebaffler.com/salvos/the-problem-with-music)— leading many to resent the majors as "bad guys."

By contrast, the indie labels obey the people's will, as measured by the size of an artist's fanbase. So once *anyone* sees a safe bet, *everyone* does— and now all that's left is for one label to outbid the rest by offering the most generous terms. In other words, the way to do *right* by artists… is to trust the numbers! And for this, the indies get praised as "good guys."

So when the tech platforms arrived, their skills with numbers made them good guys as well. As such, the indie pundits rushed to defend file sharing: "*Real* artists earn a living by going on tour; recordings are just publicity!" And social media: "*Real* artists engage with their fans, and now they can at *any* time— not just after a show!"

In short, today's data-driven industry is what the [*indie* camp wanted](https://www.theguardian.com/music/2014/nov/17/steve-albini-at-face-the-music-how-the-internet-solved-problem-with-music); thanks to them, even the *majors* now [force artists](https://www.honest-broker.com/p/record-labels-dig-their-own-grave#:~:text=So%20they%20demand,record%20labels%20anymore.) to build a fanbase first. The only way to revolt, then, is to reject indie rock *itself*. This is why BYCombo tells you *not* to boost your numbers— but to pursue a vision that few others see.

### ${++sectionCounter}. Unenlightened romanticism is a dark age

Are we headed for a new Romanticism? Some speak of a [rebellion brewing](https://www.theguardian.com/commentisfree/2023/dec/28/new-romanticism-technology-backlash) against science, as the arts get "moneyballed," or taken over by algorithms, like [baseball has](https://en.wikipedia.org/wiki/Sabermetrics). Yet does the analogy fit? In baseball, algorithms *remove* human bias… while in the arts, they *amplify* it. So maybe our problem *isn't* with the algorithms; maybe it's with *us*— the humans!

According to science, we humans aren't just biased against creativity, but also against low-status groups— who generate most creative ideas in the arts. And when in doubt, we [imitate others](https://en.wikipedia.org/wiki/Herd_mentality)— yet they have the same biases that we do. For revolutions to succeed, then, the research is clear: The elites *must* get involved, by spreading these creative ideas from the top down.

Yet indie rock told us to do *away* with elites: "Any good idea is *sure* to spread from the bottom up… by *us*." In other words, we've been living as Romantics— while scoffing at science— all along! In fact, this is why it was so *easy* for the algorithms to take over: The tech platforms just had to speak of "freeing the human spirit" or "obeying the people's will," and we fell for it every time.

So yes, the arts have declined— but it *isn't* because the tech platforms listen to science; it's because the indie camp *doesn't*! The only way forward, then, is a new Enlightenment, by which we finally work with our human nature as the research says it is, not as we wish it to be— for the first time this century. And if you join BYCombo… you can help to usher it in.

### ${++sectionCounter}. Scarcity inspires generational courage

Combining glam's gender-bending look with metal's aggression, hair metal was the ideal youth movement— for a *previous* generation. But as for Gen X… they saw it as a relic. Well, guess what was no less outdated by the '00s: indie rock's rule for artists to hustle! Yet… Millennials embraced it as their own. Why were they content to merely "larp," or [role-play](https://en.wikipedia.org/wiki/Live_action_role-playing_game), the *idea* of revolution?

Here's what I mean: If you *don't* hustle, the indie camp will reject you. But you should *want* to double down on making art instead— plus, the punishment for breaking this rule means that history will see your act as courageous. So it's one way *not* to larp… *and* a twofer! Who *wouldn't* jump on it? *I* did— and as an Xennial, what did *I* know of courage? Yet no Millennials joined me… Why?

Here's my guess: Courage is inspired by scarcity— but Millennials only knew information scarcity long enough to fear it. They were then given structured ways to defeat it, which won [their loyalty](https://xkcd.com/1601). And thus, they never saw what this Xennial could see: The only rules left that still take courage to break… are the *structural* ones, like indie rock's— that they *themselves* enforce!

So Millennials simply broke the rules that Gen X *already* broke… and called *that* their revolution! Luckily, Gen Z has only ever faced an *over*-abundance of information, and now they [long for a return](https://writingball.blogspot.com/2022/12/logan-lane-and-luddite-club.html) to its scarcity. Just in time… to try an Xennial's solution! With BYCombo, you can show courage once again— by doubling down to make art, for a serious chunk of lifetime.



### ${++sectionCounter}. Progress tracks aesthetics, not logistics

What's a "larp"? Here's my test: Could it have been a fictional movie *instead*? Let's say, a fictional Queen… How would you commission the soundtrack?! So, Queen: no larp. "Well then, isn't it *also* no larp for an indie artist to hustle, if they're using an app that changed the paradigm too *soon* to make sense in a movie?" Okay, that's fair. But in that case, isn't the real hero… the *app*?

In music history courses, we learn that the evolution of the piano allowed Beethoven to compose sonatas of unprecedented [range and dynamics](https://www.cpr.org/2020/09/19/he-wanted-larger-and-louder-the-pianos-of-beethovens-time-werent-enough-for-him). By contrast, it's hardly mentioned that the invention of lithography allowed his scores to be sold to the middle class. In other words, music historians care about technology when it advances the *art form*— not the *supply chain*.

Unlike what the indie camp believes, then, music history *won't* care how the Internet empowered artists to market and distribute their own works. But it *might* care how BYCombo allowed them to form bands with unprecedented lineups. So come explore one of rock's final frontiers— by having a dancer, puppeteer, or even manager as your bandmate!

### ${++sectionCounter}. A renaissance of late bloomers awaits

Beethoven composed his [magnum opus](https://en.wikipedia.org/wiki/Symphony_No._9_(Beethoven)) in the final years of his life— and he was no exception: The best composers got *better* with age. But this still isn't the case with rock bands— which means there's yet *another* frontier left to explore! So if you're a Millennial, don't fret: You now have a lifetime to give *future* generations the renaissance that indie rock denied to *yours*.

In her book [*Generations*](https://www.simonandschuster.com/books/Generations/Jean-M-Twenge/9781982181611), Jean Twenge notes that young people are reaching key milestones *later* in life, because society in *general* is now more complex; thus, more time is needed to realize your potential. But this must also be true for the arts in *particular*— which explains how Millennials got off track there: Indie rock taught them to hustle… and hustling makes you burn out *sooner*.

By contrast, a deep love of the craft can motivate you for a lifetime. After all, to take on greater challenges, you must build your talents further— and to build your talents further, you must take on greater challenges… onward and upward, in a virtuous circle. So if you're burned out by the hustle, BYCombo can get you back on track— by helping you stay in love with your craft.

### ${++sectionCounter}. Happiness flows from the act of creation

At the peak of my years working eighty-hour weeks— forty to earn a living, and forty on my own projects— a friend staged an intervention. "On a scale of one to ten," he asked, "how happy are you?" "Eight," I replied. He was floored; he'd expected a three. And so I cleared up the matter: The very reason I chose this unusual path was to *guarantee* my happiness.

In his book [*Flow*](https://www.harpercollins.com/products/flow-mihaly-csikszentmihalyi), Mihaly Csikszentmihalyi points out that when you have a clear goal; feel adequately challenged; and get immediate feedback from the task at hand, you become fully immersed in the act of creation— which leads to long-term fulfillment. This explains how my years of sacrifice were some of my happiest; I *wasn't* slowly killing myself, as my friend had feared.

Meanwhile, there's a [mental health crisis](https://pitchfork.com/features/article/music-and-mental-health) in music today, with artists facing high levels of anxiety and depression. Why is this? It's because any exposure gained from years of hustling might just as well be won by chance, or bought through privilege, in an instant. Every indie artist knows this, yet they play the losing game anyway… and it eats at their soul.

Yes, the struggle can be a gift— but only when you face it on your own terms. If you're forced to use the same tools as everyone else… then it's a *grind*. This is why BYCombo tells you to focus on your craft, and to join a community of others doing the same. It isn't *just* to make your art better; it's *also* for your happiness— and the good of your soul.

### ${++sectionCounter}. The simplest explanation is likely correct

To explain the squiggles traversed by the planets in their orbits around the Earth, ancient astronomers mapped out a convoluted [system of epicycles](https://en.wikipedia.org/wiki/Deferent_and_epicycle). But once Copernicus proposed that the planets actually revolve around the *Sun*, these orbits became circles. This was a much simpler explanation— so by Occam's razor, it became accepted as the correct one.

Well, music today requires a similarly convoluted explanation, doesn't it? After all, the indie way is widely understood to nurture the best art… yet *no* indie artist can rival what the major labels gave us in the '90s?! And now the majors *themselves* do things the indie way, by only signing artists who *don't* need a label… yet this *hasn't* led to the next Nirvana or Radiohead?!

But let's swap "Sun" and "Earth" in this model: What if the indie way… actually makes art… *worse*? Whoa— everything lines up now! Yet the indie camp will oppose this much simpler explanation— so BYCombo won't get far by merely proposing it. To gain acceptance, interdependence still needs advocates. Will you join with the Bobtail Yearlings, then, and [be a Galileo](https://en.wikipedia.org/wiki/Galileo_affair) of music?

### ${++sectionCounter}. Art needs the passion of martyrs

"Where's *our* Nirvana?" It's a question asked by today's young people. Well, there's an easy way to answer it: Can we imagine the *next* generation asking of any band today, "Where's *our* _____?" If so, then _____ is this generation's Nirvana. Of course, we can't— because this generation never got their own Nirvana. But… why *didn't* they?

It's because we only pine for past artists who self-sacrificed to advance the art form— and future audiences will feel the same. But indie rock *protects* artists from exploitation, and so it roots for those who *empower* themselves instead. As such, today's indie artists demand fair compensation; they don't self-sacrifice for *anyone*— because to do so is a sign of being exploited.

Yet self-empowerment comes with its own set of problems. For one, it's just [self-serving](https://www.theguardian.com/music/2019/feb/14/the-ryan-adams-allegations-are-the-tip-of-an-indie-music-iceberg), [power-seeking](https://pitchfork.com/news/arcade-fires-win-butler-accused-of-sexual-misconduct-by-multiple-women-frontman-responds) behavior in those we see as underdogs; it's not noble in and of itself. For another, artists with this trait hold the *advantage*— so how are *they* the underdogs? But worst of all, no revolution can ever *begin*, because the means to fair compensation only get settled at the *end*.

To save rock, then, we *need* to stop shutting out bands who self-sacrifice to advance the art form. Yes, their reliance on business partners leaves them open to exploitation. But once the art form stagnates, what's left to protect? In other words, after Empowerment… comes the Age of Martyrdom.

Let's never go back to the days of artists dying young, of course. Thankfully, history tells of another kind of martyr: those who sacrificed not their *lives*, but their *lifetimes*. What if the next Nirvana is an entire *movement* of selfless bands, each one sacrificing a serious chunk of lifetime? If so, then come join BYCombo— and help give this generation a Nirvana of their own!
`,
        }}
    />
)

Component.propTypes = {
    sectionCounter: PropTypes.number,
}

export default Component
