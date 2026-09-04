import React from 'react'
import { useSelector } from 'react-redux'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import CustomButton from '..'
import Svg from '../../Svg'
import {
    mapSelectedTopLevelPagePath,
} from '../../../redux/page/selector'
import backLink from '../../../assets/svgs/app/backLink'

const ForwardButton = ({ ...rest }) => {
    const
        topLevelPagePath = useSelector(mapSelectedTopLevelPagePath)

    return (
        <CustomButton
            {...{
                className: cx(
                    'ForwardButton',
                ),
                pagePath: topLevelPagePath,
                ...rest,
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

ForwardButton.propTypes = {}

export default ForwardButton
