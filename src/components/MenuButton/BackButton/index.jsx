import React from 'react'
import { navigate } from 'gatsby'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import MenuButton from '../../MenuButton'
import Svg from '../../Svg'
import backLink from '../../../assets/svgs/app/backLink'

const BackButton = () => {
    const handleButtonClick = () => {
        navigate(-1)
    }

    return (
        <MenuButton
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
        </MenuButton>
    )
}

BackButton.propTypes = {}

export default BackButton
