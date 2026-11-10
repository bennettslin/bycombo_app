import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Flex from '../../../../../components/Flex'
import ShareButton from '../../../../../components/CustomButton/ShareButton'
import { mapIsLinkCopied } from '../../../../../redux/page/selector'
import './style'

const ShareLink = () => {
    const isLinkCopied = useSelector(mapIsLinkCopied)

    return (
        <Flex
            {...{
                className: cx(
                    'ShareLink',
                    'fontSize__sm',
                ),
                gap: 'xs',
            }}
        >
            <label>
                {isLinkCopied ? `Link copied!` : `Copy link`}
            </label>
            <ShareButton isInMenu />
        </Flex>
    )
}

export default ShareLink
