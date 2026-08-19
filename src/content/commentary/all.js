import gatekeeperCommentary from './gatekeeper'
import conservativeCommentary from './conservative'
import alternativeCommentary from './alternative'
import indieocracyCommentary from './indieocracy'
import audienceCommentary from './audience'
import credCommentary from './cred'
import populismCommentary from './populism'
import wokenessCommentary from './wokeness'
import { getAllNotesBody } from '../helper'

export default {
    title: '"all commentaries"',
    body: getAllNotesBody([
        gatekeeperCommentary,
        conservativeCommentary,
        alternativeCommentary,
        indieocracyCommentary,
        audienceCommentary,
        credCommentary,
        populismCommentary,
        wokenessCommentary,
    ]),
}
