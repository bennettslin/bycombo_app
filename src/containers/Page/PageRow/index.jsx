import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../../contexts/PageConfig'
import Flex from '../../../components/Flex'
import BackLink from './BackLink'
import ShareLink from './ShareLink'
import './style'

const PageRow = ({ isBottomRow }) => {
    const { is404Page } = useContext(PageConfigContext)

    if (is404Page) {
        return null
    }

    return (
        <Flex
            {...{
                className: cx(
                    'PageRow',
                    isBottomRow && 'PageRow__bottom',
                ),
                flexDirection: 'rowReverse',
                justifyContent: 'spaceBetween',
                gap: 'sm',
            }}
        >
            <ShareLink />
            <BackLink />
        </Flex>
    )
}

PageRow.propTypes = {
    isBottomRow: PropTypes.bool,
}

export default PageRow
