import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from 'gatsby'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import MenuButton from '../../MenuButton'
import Svg from '../../Svg'
import {
    mapIsSubsequentSession,
    mapSelectedTopLevelPagePath,
} from '../../../redux/page/selector'
import backLink from '../../../assets/svgs/app/backLink'

const BackButton = ({ ...rest }) => {
    const
        isSubsequentSession = useSelector(mapIsSubsequentSession),
        topLevelPagePath = useSelector(mapSelectedTopLevelPagePath)

    const handleButtonClick = e => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <MenuButton
            {...{
                className: cx(
                    'HeadingButton',
                ),
                pagePath: topLevelPagePath,
                ...isSubsequentSession && {
                    handleButtonClick,
                },
                ...rest,
            }}
        >
            <Svg
                {...{
                    className: 'backLink',
                    src: backLink,
                }}
            />
        </MenuButton>
    )
}

BackButton.propTypes = {}

export default BackButton
