import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import PageFooterRow from '../FooterRow'
import BackLink from '../../BackLink'
import ShareLink from '../../../../components/ShareLink'
import { mapSelectedPagePath } from '../../../../redux/page/selector'
import { getTopLevelPageFromPath } from '../../../../utils/pages/path'

const TopLevelShareRow = ({ isBottomRow }) => {
    const
        { noShare } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath),
        topLevelPage = getTopLevelPageFromPath(selectedPagePath),
        doRenderTopLevelPageLink = topLevelPage !== selectedPagePath

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
                    <ShareLink />
                ),
            }}
        />
    )
}

TopLevelShareRow.propTypes = {
    isBottomRow: PropTypes.bool,
}

export default TopLevelShareRow
