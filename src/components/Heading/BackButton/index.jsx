import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { navigate } from 'gatsby'
import Button from '../../Button'
import Svg from '../../Svg'
import backLink from '../../../assets/svgs/app/backLink'
import './style'

const BackButton = ({ showBackButton }) => {
    const handleButtonClick = () => {
        navigate(-1)
    }

    return showBackButton && (
        <Button
            dropShadow
            {...{
                className: cx(
                    'BackButton',
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
    )
}

BackButton.propTypes = {
    showBackButton: PropTypes.bool.isRequired,
}

export default BackButton
