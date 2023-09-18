import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import PageFooterRow from '../FooterRow'
import BackLink from '../../BackLink'
import ShareButtons from '../../../../components/ShareButtons'
import { mapSelectedPagePath } from '../../../../redux/page/selector'
import { getIsTabbedPath, getTopLevelPageFromPath } from '../../../../utils/pages/path'

const TopLevelShareRow = ({ isBottomRow }) => {
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
            {...{
                isBottomRow,
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

TopLevelShareRow.propTypes = {
    isBottomRow: PropTypes.bool,
}

export default TopLevelShareRow
