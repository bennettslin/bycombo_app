import gatekeeperCommentary from './gatekeeper'
import conservativeCommentary from './conservative'
import indieocracyCommentary from './indieocracy'
import audienceCommentary from './audience'
import credCommentary from './cred'
import logisticsCommentary from './logistics'
import populismCommentary from './populism'
import wokenessCommentary from './wokeness'
import { addNewEntryToArray } from '../helper'

const commentaries = [
    gatekeeperCommentary,
    conservativeCommentary,
    indieocracyCommentary,
    audienceCommentary,
    credCommentary,
    logisticsCommentary,
    populismCommentary,
    wokenessCommentary,
]

export default {
    title: '"all commentaries"',
    body: commentaries.reduce((newArray, { title, body }) => {
        addNewEntryToArray(newArray, `\n### ${title}`)
        addNewEntryToArray(newArray, body)
        return newArray
    }, [``]).flat(),
}
