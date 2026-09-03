import React from 'react'
import PropTypes from 'prop-types'
import ShareButton from '../../MenuButton/ShareButton'
import BackButton from '../../MenuButton/BackButton'

const HeadingButton = ({ linkId, doShowBackLink }) => {
    return doShowBackLink ? (
        <BackButton />
    ) : (
        <ShareButton {...{ linkId }} />
    )
}

HeadingButton.propTypes = {
    linkId: PropTypes.string,
    doShowBackLink: PropTypes.bool.isRequired,
}

export default HeadingButton
