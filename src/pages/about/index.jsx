import { getPageElementForConfig } from '../../containers/Page'
import { getMarkdownLinkFromText } from '../../utils/format/markdown'

const
    EPIC_COULDNT_FAIL = 'So epic it couldn\'t fail',
    DUNNING_KRUGER_ARTIST = 'A Dunning-Kruger artist',
    MOMENTUM_FROM_NOTHING = 'Momentum from nothing',
    MASTERPIECE_REVOLUTION = 'The masterpiece revolution'

export default getPageElementForConfig({
    body: `
${getMarkdownLinkFromText(EPIC_COULDNT_FAIL)}
${getMarkdownLinkFromText(DUNNING_KRUGER_ARTIST)}
${getMarkdownLinkFromText(MOMENTUM_FROM_NOTHING)}
${getMarkdownLinkFromText(MASTERPIECE_REVOLUTION)}

### ${EPIC_COULDNT_FAIL}

A long time ago, I was in a band with some friends of mine. We'd been playing shows for several years, and I was frustrated that my friends didn't share my ambition to make it big. Yet I struggled to find ambitious bandmates elsewhere, because I didn't look like any front person who'd ever made it before.

At the time, I was studying masterpieces like James Joyce's *Ulysses* and the Beatles' later albums, hoping to learn what makes a work great. As I read about the extensive recording sessions for *Sgt. Pepper's*, I realized something. With home studios becoming more affordable, a band no longer needed to be established to record their first masterpiece.

And then it hit me. I should create a masterpiece, "The *Ulysses* of Rock Albums," on my own. It would be so epic that I couldn't fail to make it big. I assumed that others out there were thinking similarly, and I would emerge to find myself part of an exciting wave of new bands, each striving to be as good as the Beatles.

### ${DUNNING_KRUGER_ARTIST}

But there was no new wave. Instead, upon completion, every demo of *Yearling's Bobtail* was rejected. I soon understood why. With so many unknown bands hoping to be considered, the gatekeepers can only grant each release a fleeting first impression. Want another chance? Release another work.

Still, what's hard for one is hard for all. And so the most promising bands simply embrace the system, maximizing their chances by putting out more and frequent releases.

But *Yearling's Bobtail* took me five years to create. It hides layers of meaning that are revealed upon repeated listens. And there was no way to signal this. If it were possible, then every other band would do the same. So I just kept trying to get the same work heard, again and again. But this is what the *least* competent artists do— because they don't understand that rejection can be used to get better.

An artist who creates “The *Ulysses* of Rock Albums,” in other words, will seem to exemplify the Dunning-Kruger effect. They will appear too incompetent to even recognize it.

### ${MOMENTUM_FROM_NOTHING}

This frustrated me, of course. But soon I saw a history-making opportunity and grew excited. Because along with studying masterpieces, I'd also studied musical revolutions. And revolution begins with the incompetent.

Every now and then, some underground bands we respect are welcomed into the mainstream. Let's call this a minor revolution. There is no momentum, because each incremental shifting of the needle faces new resistance. The next cohort is now the one whose music is too raw, or too experimental, for a mainstream audience.

But a major revolution begins with those we deem incompetent, like the early pioneers of jazz or hip hop. As they compel us to expand our notion of competence, others who were shut out can now join, pushing the boundary further to let even more in. And so, starting from nothing, the revolution builds momentum in a virtuous circle, making it seem inevitable in hindsight.

This phenomenon isn't limited to art. Henry Ford and Steve Jobs were derided as incompetent for trying to sell a worse car and worse computer, respectively. But their products were also cheaper, which allowed them to build something from nothing— namely, a middle-class market for cars and computers.

### ${MASTERPIECE_REVOLUTION}

It's not hard to imagine an unknown band hearing *Yearling's Bobtail* and feeling encouraged to create a masterpiece. Their work might then inspire others, continuing a virtuous circle. But if these bands are given the same runaround I was given, then this masterpiece revolution will end with me.

The good news is that no one actually accused me of incompetence. What undid me was a system that's been streamlined to weed it out. Which means this might be the first revolution in music history that doesn't need to change hearts or minds. The problem is really only systemic; its solution can be likewise.

To start with, let's agree that "one release, one chance" is very fair. Any alternative system must be no less egalitarian. So I propose counting the number of hours that went into creating a work. By this metric, it would be reasonable for a masterpiece to be granted extra consideration. BYCombo can verify this number for each of its bands, while working to convince the gatekeepers of its value.

But devoting every waking hour, year after year, toward creating a masterpiece isn't easy. No one should do it alone. Along with so much else, bandmates provide moral support and a critical ear. So BYCombo will also bring together ambitious artists who couldn't have found each other on their own.

Not everyone wants to join the masterpiece revolution, of course. But for those who do, I suspect that BYCombo must seem like an obvious idea in retrospect. Had it been an option for me, I know I would have taken it!
    `,
})
