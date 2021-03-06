import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import PageFooterRow from '../FooterRow'
import BackLink from '../../BackLink'
import ShareButtons from '../../../../components/ShareButtons'
import { mapSelectedPagePath } from '../../../../redux/page/selector'
import { getIsTabbedPath, getTopLevelPageFromPath } from '../../../../utils/pages/path'

const TopLevelShareRow = () => {
    const
        { noShare } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath),
        topLevelPage = getTopLevelPageFromPath(selectedPagePath),
        doRenderTopLevelPageLink = (
            topLevelPage !== selectedPagePath &&
            !getIsTabbedPath(selectedPagePath)
        )

    if (!doRenderTopLevelPageLink && noShare) {
        return null
    }

    return (
        <PageFooterRow
            isBottomRow
            {...{
                leftChild: (
                    <BackLink />
                ),
                rightChild: !noShare && (
                    <ShareButtons />
                ),
            }}
        />
    )
}

export default TopLevelShareRow
