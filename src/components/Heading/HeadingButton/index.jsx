import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { navigate } from 'gatsby'
import Button from '../../Button'
import Svg from '../../Svg'
import CopyUrlButton from '../../ShareButtons/ShareButton/CopyUrlButton'
import backLink from '../../../assets/svgs/app/backLink'
import './style'

const HeadingButton = ({ doShowBackButton }) => {
    const handleButtonClick = () => {
        navigate(-1)
    }

    return doShowBackButton ? (
        <Button
            dropShadow
            {...{
                className: cx(
                    'HeadingButton',
                ),
                handleButtonClick,
            }}
        >
            <Svg
                {...{
                    className: 'backLink',
                    src: backLink,
                }}
            />
        </Button>
    ) : <CopyUrlButton />
}

HeadingButton.propTypes = {
    doShowBackButton: PropTypes.bool.isRequired,
}

export default HeadingButton
