import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from 'gatsby'
import Anchor from '../../../components/Anchor'
import Flex from '../../../components/Flex'
import { mapDoShowBackButton, mapSelectedPagePath } from '../../../redux/page/selector'
import { getCapitalizedText } from '../../../utils/format'
import { getIsTabbedPath, getTopLevelPageFromPath } from '../../../utils/pages/path'

const BackLink = () => {
    const
        selectedPagePath = useSelector(mapSelectedPagePath),
        doShowBackButton = useSelector(mapDoShowBackButton),
        topLevelPage = getTopLevelPageFromPath(selectedPagePath)

    const handleAnchorClick = e => {
        navigate(-1)
        e.preventDefault()
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
