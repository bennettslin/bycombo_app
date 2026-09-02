import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from 'gatsby'
import Anchor from '../../../components/Anchor'
import Flex from '../../../components/Flex'
import {
    getMapBackLinkText,
    getMapDoShowBackLink,
    mapIsSubsequentSession,
    mapSelectedTopLevelPagePath,
} from '../../../redux/page/selector'

const BackLink = () => {
    const
        doShowBackLink = useSelector(getMapDoShowBackLink),
        topLevelPagePath = useSelector(mapSelectedTopLevelPagePath),
        isSubsequentSession = useSelector(mapIsSubsequentSession),
        backButtonText = useSelector(getMapBackLinkText)

    const handleAnchorClick = e => {
        e.preventDefault()
        navigate(-1)
    }

    return doShowBackLink && (
        <Flex {...{ justifyContent: 'normal' }} >
            <Anchor
                {...{
                    pagePath: topLevelPagePath,
                    ...isSubsequentSession && {
                        handleAnchorClick,
                    },
                }}
            >
                ❮ {backButtonText}
            </Anchor>
        </Flex>
    )
}

export default BackLink
