import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import './style'
import Markdown from '../Markdown'

const Demo = ({
    className,
    band,
    title,
    description,
}) => (
    <Flex
        {...{
            className: cx(
                'Demo',
                className,
            ),
            gap: `md`,
        }}
    >
        <Flex
            {...{
                className: cx(
                    'Demo__image',
                    className,
                ),
            }}
        >

        </Flex>
        <Flex
            {...{
                className: cx(
                    'Demo__text',
                    className,
                ),
            }}
        >
            <Markdown>
                {band}
            </Markdown>
            <Markdown>
                {title}
            </Markdown>
            <Markdown>
                {description}
            </Markdown>
        </Flex>
    </Flex>
)

Demo.propTypes = {
    className: PropTypes.string,
    band: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Demo
