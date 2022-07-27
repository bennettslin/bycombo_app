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
import { getDemoLinkPath } from '../../utils/pages/path'
import './style'

const DemoLink = ({
    className,
    year,
    band,
    project,
    email,
    description,
    src,
}) => (
    <Anchor
        {...{
            className: cx(
                'DemoLink',
                className,
            ),
            pagePath: getDemoLinkPath({
                year,
                band,
                project,
            }),
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
                            'DemoLink__image',
                        ),
                        src,
                    }}
                />
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
    </Anchor>
)

DemoLink.propTypes = {
    className: PropTypes.string,
    year: PropTypes.number.isRequired,
    band: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default DemoLink
