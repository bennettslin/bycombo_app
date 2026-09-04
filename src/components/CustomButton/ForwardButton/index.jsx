import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import CustomButton from '..'
import Svg from '../../Svg'
import {
    mapSelectedChildPagePath,
    mapSelectedTopLevelPagePath,
} from '../../../redux/page/selector'
import backLink from '../../../assets/svgs/app/backLink'

const ForwardButton = ({ linkId }) => {
    const
        topLevelPagePath = useSelector(mapSelectedTopLevelPagePath),
        childPagePath = useSelector(mapSelectedChildPagePath),
        /**
         * Standalone commentary and reference pages will get child path from
         * selected page path. On "all" commentaries or references page, it'll
         * be passed by the heading.
         */
        pagePath = `${topLevelPagePath}#${linkId || childPagePath}`

    return (
        <CustomButton
            {...{
                className: cx(
                    'ForwardButton',
                ),
                pagePath,
            }}
        >
            <Svg
                {...{
                    className: 'backLink',
                    src: backLink,
                }}
            />
        </CustomButton>
    )
}

ForwardButton.propTypes = {
    linkId: PropTypes.string,
}

export default ForwardButton
