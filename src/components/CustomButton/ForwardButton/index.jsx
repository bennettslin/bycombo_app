import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import CustomButton from '..'
import Svg from '../../Svg'
import {
    mapSelectedChildPagePath,
    mapSelectedTopLevelPagePath,
} from '../../../redux/page/selector'
import backLink from '../../../assets/svgs/app/backLink'

const ForwardButton = ({ ...rest }) => {
    const
        topLevelPagePath = useSelector(mapSelectedTopLevelPagePath),
        childPagePath = useSelector(mapSelectedChildPagePath),
        pagePath = `${topLevelPagePath}#${childPagePath}`

    return (
        <CustomButton
            {...{
                className: cx(
                    'ForwardButton',
                ),
                pagePath,
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

export default ForwardButton
