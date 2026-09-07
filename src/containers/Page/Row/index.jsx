import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../../contexts/PageConfig'
import HomeButton from '../../Main/Header/HomeButton'
import BackLink from './BackLink'
import ShareLink from './ShareLink'
import './style'

const PageRow = ({ isBottomRow, isInHeader = false }) => {
    const { is404Page } = useContext(PageConfigContext)

    if (is404Page) {
        return null
    }

    return (
        <div
            {...{
                className: cx(
                    'PageRow',
                    isBottomRow && 'PageRow__bottom',
                ),
            }}
        >
            <BackLink />
            {isInHeader && <HomeButton isInRow />}
            <ShareLink />
        </div>
    )
}

PageRow.propTypes = {
    isBottomRow: PropTypes.bool,
    isInHeader: PropTypes.bool,
}

export default PageRow
