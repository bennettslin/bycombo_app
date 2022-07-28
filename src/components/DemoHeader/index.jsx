import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import ContactEmail from '../ContactEmail'
import Flex from '../Flex'
import Image from '../Image'
import Markdown from '../Markdown'
import Heading from '../Heading'
import { getSmartQuotedText } from '../../utils/format/smartQuote'
import './style'

const DemoHeader = ({
    className,
    band,
    project,
    email,
    // href,
    description,
    src,
}) => (
    <Flex
        {...{
            className: cx(
                'DemoHeader',
                className,
            ),
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
                        className,
                    ),
                }}
            >
                <Image
                    {...{
                        className: cx(
                            'DemoHeader__image',
                        ),
                        src,
                    }}
                />
            </Flex>
            <Flex
                {...{
                    className: cx(
                        'DemoHeader__text',
                        className,
                    ),
                    flexDirection: 'column',
                    alignItems: 'normal',
                    gap: 'xxs',
                }}
            >
                <Heading {...{ level: 2 }}>
                    <i>{getSmartQuotedText(project)}</i>
                </Heading>
                <Heading {...{ level: 3 }}>
                    {getSmartQuotedText(band)}
                </Heading>
                <Markdown>
                    {description}
                </Markdown>
                <ContactEmail {...{ email }}/>
            </Flex>
        </Flex>
    </Flex>
)

DemoHeader.propTypes = {
    className: PropTypes.string,
    band: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default DemoHeader
