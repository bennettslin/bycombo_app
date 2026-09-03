import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { navigate } from 'gatsby'
import MenuButton from '../../MenuButton'
import Svg from '../../Svg'
import ShareButton from '../../ShareLink/ShareButton'
import backLink from '../../../assets/svgs/app/backLink'

const HeadingButton = ({ linkId, doShowBackLink }) => {
    const handleButtonClick = () => {
        navigate(-1)
    }

    return doShowBackLink ? (
        <MenuButton
            {...{
                className: cx(
                    'HeadingButton',
                ),
                handleButtonClick,
            }}
        >
            <Svg
                {...{
                    className: 'backLink',
                    src: backLink,
                }}
            />
        </MenuButton>
    ) : <ShareButton {...{ linkId }} />
}

HeadingButton.propTypes = {
    linkId: PropTypes.string,
    doShowBackLink: PropTypes.bool.isRequired,
}

export default HeadingButton
