import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import './style'

const Image = ({
    className,
    isSquare,
    isPortrait,
    src,
    onLoad = () => {},

}) => {
    let width = 100

    if (isSquare) {
        width = 80
    } else if (isPortrait) {
        width = 60
    }

    return (
        <Flex
            {...{
                className: cx(
                    'Image',
                    className,
                ),
            }}
        >
            <img
                {...{
                    style: {
                        width: `${width}%`,
                    },
                    src,
                    onLoad,
                }}
            />
        </Flex>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    isSquare: PropTypes.bool,
    isPortrait: PropTypes.bool,
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
}

export default Image
