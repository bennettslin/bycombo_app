import gatekeeperCommentary from './gatekeeper'
import conservativeCommentary from './conservative'
import indieocracyCommentary from './indieocracy'
import audienceCommentary from './audience'
import credCommentary from './cred'
import logisticsCommentary from './logistics'
import populismCommentary from './populism'
import wokenessCommentary from './wokeness'
import { getAllNotesBody } from '../helper'

export default {
    title: '"all commentaries"',
    body: getAllNotesBody([
        gatekeeperCommentary,
        conservativeCommentary,
        indieocracyCommentary,
        audienceCommentary,
        credCommentary,
        logisticsCommentary,
        populismCommentary,
        wokenessCommentary,
    ]),
}
