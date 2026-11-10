import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../../CustomButton'
import Svg from '../../Svg'
import copyUrl from '../../../assets/svgs/socialMedia/copyUrl'
import copyUrlCopied from '../../../assets/svgs/socialMedia/copyUrlCopied'
import { updateIsLinkCopied } from '../../../redux/page/action'
import { mapIsLinkCopied, mapSelectedPagePath } from '../../../redux/page/selector'
import { getUrlFromPathAndLinkId } from '../../../utils/pages/path'
import './style'

const ShareButton = ({ linkId, ...rest }) => {
    const
        dispatch = useDispatch(),
        selectedPagePath = useSelector(mapSelectedPagePath),
        isLinkCopied = useSelector(mapIsLinkCopied),
        [copyTimeoutId, setCopyTimeoutId] = useState(-1)

    const resetCopiedUrlKey = () => {
        dispatch(updateIsLinkCopied())
    }

    const handleButtonClick = () => {
        navigator.clipboard.writeText(getUrlFromPathAndLinkId(
            selectedPagePath,
            linkId,
        ))

        clearTimeout(copyTimeoutId)
        dispatch(updateIsLinkCopied(true))

        setCopyTimeoutId(setTimeout(
            resetCopiedUrlKey,
            1000,
        ))
    }

    return (
        <CustomButton
            {...{
                className: cx(
                    'ShareButton',
                ),
                handleButtonClick,
                ...rest,
            }}
        >
            <Svg
                {...{
                    src: isLinkCopied ? copyUrlCopied : copyUrl,
                }}
            />
        </CustomButton>
    )
}

ShareButton.propTypes = {
    linkId: PropTypes.string,
}

export default ShareButton
