import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CustomButton from '../../CustomButton'
import Svg from '../../Svg'
import copyUrl from '../../../assets/svgs/socialMedia/copyUrl'
import copyUrlCopied from '../../../assets/svgs/socialMedia/copyUrlCopied'
import { mapSelectedPagePath } from '../../../redux/page/selector'
import { getUrlFromPathAndLinkId } from '../../../utils/pages/path'
import './style'

const ShareButton = ({ linkId, ...rest }) => {
    const
        copiedUrlRef = useRef(),
        selectedPagePath = useSelector(mapSelectedPagePath),
        [isCopied, setIsCopied] = useState(false),
        [copyTimeoutId, setCopyTimeoutId] = useState(-1)

    copiedUrlRef.current = isCopied

    const resetCopiedUrlKey = () => {
        if (copiedUrlRef.current) {
            setIsCopied(false)
        }
    }

    const handleButtonClick = () => {
        navigator.clipboard.writeText(getUrlFromPathAndLinkId(
            selectedPagePath,
            linkId,
        ))

        clearTimeout(copyTimeoutId)
        setIsCopied(true)

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
                handleTooltipHide: resetCopiedUrlKey,
                ...rest,
            }}
        >
            <Svg
                {...{
                    src: isCopied ? copyUrlCopied : copyUrl,
                }}
            />
        </CustomButton>
    )
}

ShareButton.propTypes = {
    linkId: PropTypes.string,
}

export default ShareButton
