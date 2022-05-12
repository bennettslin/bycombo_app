import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Anchor from '../Anchor'
import Flex from '../Flex'
import Image from '../Image'
import Markdown from '../Markdown'
import Heading from '../Heading'
import { getSmartQuotedText } from '../../utils/format/smartQuote'
import './style'

const DemoLink = ({
    className,
    band,
    title,
    description,
    href,
    src,
}) => (
    <Anchor
        {...{
            className: cx(
                'DemoLink',
                className,
            ),
            href,
        }}
    >
        <Flex
            {...{
                justifyContent: 'normal',
                alignItems: 'start',
                gap: `sm`,
            }}
        >
            <Flex
                {...{
                    className: cx(
                        'DemoLink__image',
                        className,
                    ),
                }}
            >
                <Image {...{ src }} />
            </Flex>
            <Flex
                {...{
                    className: cx(
                        'DemoLink__text',
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
                <Heading {...{ level: 3 }}>
                    {getSmartQuotedText(band)}
                </Heading>
                <Markdown>
                    {description}
                </Markdown>
            </Flex>
        </Flex>
    </Anchor>
)

DemoLink.propTypes = {
    className: PropTypes.string,
    band: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default DemoLink
