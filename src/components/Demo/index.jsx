import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import Image from '../Image'
import Markdown from '../Markdown'
import Heading from '../Heading'
import './style'
import { getSmartQuotedText } from '../../utils/format/smartQuote'

const Demo = ({
    className,
    band,
    title,
    description,
    src,
}) => (
    <Flex
        {...{
            className: cx(
                'Demo',
                className,
            ),
            justifyContent: 'normal',
            alignItems: 'start',
            gap: `sm`,
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
            <Image {...{ src }} />
        </Flex>
        <Flex
            {...{
                className: cx(
                    'Demo__text',
                    className,
                ),
                flexDirection: 'column',
                alignItems: 'normal',
                gap: 'xxs',
            }}
        >
            <Heading {...{ level: 2 }}>
                <i>{getSmartQuotedText(title)}</i>
            </Heading>
            <Heading {...{ level: 3 }}>{getSmartQuotedText(band)}</Heading>
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
    src: PropTypes.string.isRequired,
}

export default Demo
