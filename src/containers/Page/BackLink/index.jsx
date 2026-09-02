import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from 'gatsby'
import Anchor from '../../../components/Anchor'
import Flex from '../../../components/Flex'
import {
    getMapDoShowBackButton,
    mapSelectedPagePath,
} from '../../../redux/page/selector'
import { getCapitalizedText } from '../../../utils/format'
import { getIsTabbedPath, getTopLevelPageFromPath } from '../../../utils/pages/path'

const BackLink = () => {
    const
        topLevelPage = getTopLevelPageFromPath(selectedPagePath),
        selectedPagePath = useSelector(mapSelectedPagePath),
        doShowBackButton = useSelector(getMapDoShowBackButton)

    const handleAnchorClick = e => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        topLevelPage !== selectedPagePath &&
        !getIsTabbedPath(selectedPagePath)
    ) && (
        <Flex {...{ justifyContent: 'normal' }} >
            <Anchor
                {...{
                    pagePath: topLevelPage,
                    ...doShowBackButton && {
                        handleAnchorClick,
                    },
                }}
            >
                ❮ Back to {getCapitalizedText(topLevelPage)}
            </Anchor>
        </Flex>
    )
}

export default BackLink
