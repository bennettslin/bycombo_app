import gatekeeperCommentary from './gatekeeper'
import conservativeCommentary from './conservative'
import alternativeCommentary from './alternative'
import indieocracyCommentary from './indieocracy'
import audienceCommentary from './audience'
import credCommentary from './cred'
import populismCommentary from './populism'
import { addNewEntryToArray } from '../helper'

const commentaries = [
    gatekeeperCommentary,
    conservativeCommentary,
    alternativeCommentary,
    indieocracyCommentary,
    audienceCommentary,
    credCommentary,
    populismCommentary,
]

export default {
    title: '"all commentaries"',
    body: commentaries.reduce((newArray, { title, body }) => {
        addNewEntryToArray(newArray, `\n### ${title}`)
        addNewEntryToArray(newArray, body)
        return newArray
    }, [``]).flat(),
}
