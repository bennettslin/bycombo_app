import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from 'gatsby'
import cx from 'classnames'
import CustomButton from '../../CustomButton'
import ForwardButton from '../ForwardButton'
import Svg from '../../Svg'
import { mapIsSubsequentSession } from '../../../redux/page/selector'
import backLink from '../../../assets/svgs/app/backLink'
import './style'

const BackButton = ({ ...rest }) => {
    const isSubsequentSession = useSelector(mapIsSubsequentSession)

    const handleButtonClick = e => {
        e.preventDefault()
        navigate(-1)
    }

    return isSubsequentSession ? (
        <CustomButton
            {...{
                className: cx(
                    'BackButton',
                ),
                handleButtonClick,
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
    ) : (
        <ForwardButton />
    )
}

export default BackButton
