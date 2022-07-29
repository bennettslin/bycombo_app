import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Anchor from '../Anchor'
import ContactEmail from '../ContactEmail'
import Flex from '../Flex'
import Image from '../Image'
import Markdown from '../Markdown'
import Heading from '../Heading'
import { getSmartQuotedText } from '../../utils/format/smartQuote'
import './style'

const DemoHeader = ({
    band,
    project,
    description,
    href,
    email,
    src,
}) => (
    <Flex
        {...{
            className: cx(
                'DemoHeader',
            ),
            flexDirection: 'column',
            alignItems: 'normal',
            gap: 'xs',
        }}
    >
        <Heading {...{ level: 1 }}>
            <i>{getSmartQuotedText(project)}</i>
        </Heading>
        <Heading {...{ level: 2 }}>
            {getSmartQuotedText(band)}
        </Heading>
        <Flex
            {...{
                justifyContent: 'normal',
                alignItems: 'start',
                gap: `sm`,
            }}
        >
            <Flex>
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
                    flexDirection: 'column',
                    alignItems: 'normal',
                    gap: 'xxs',
                }}
            >
                <Markdown>
                    {description}
                </Markdown>
                <Flex {...{ justifyContent: 'normal' }} >
                    <Anchor {...{ href }}>
                        {
                            href
                                .replace('http://', '')
                                .replace('https://', '')
                        }
                    </Anchor>
                </Flex>
                <ContactEmail {...{ email }} />
            </Flex>
        </Flex>
    </Flex>
)

DemoHeader.propTypes = {
    className: PropTypes.string,
    band: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default DemoHeader
