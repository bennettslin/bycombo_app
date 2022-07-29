import React from 'react'
import { useSelector } from 'react-redux'
import Anchor from '../../../components/Anchor'
import Flex from '../../../components/Flex'
import { mapSelectedPagePath } from '../../../redux/page/selector'
import { getCapitalizedText } from '../../../utils/format'
import { getIsTabbedPath, getTopLevelPageFromPath } from '../../../utils/pages/path'

const BackLink = () => {
    const
        selectedPagePath = useSelector(mapSelectedPagePath),
        topLevelPage = getTopLevelPageFromPath(selectedPagePath)

    return (
        topLevelPage !== selectedPagePath &&
        !getIsTabbedPath(selectedPagePath)
    ) && (
        <Flex {...{ justifyContent: 'normal' }} >
            <Anchor {...{ pagePath: topLevelPage }} >
                ❮ Back to {getCapitalizedText(topLevelPage)}
            </Anchor>
        </Flex>
    )
}

export default BackLink
