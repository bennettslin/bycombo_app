import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
// import Anchor from '../Anchor'
import ContactEmail from '../ContactEmail'
import Flex from '../Flex'
import Image from '../Image'
import Heading from '../Heading'
import Markdown from '../Markdown'
import { getSmartQuotedText } from '../../utils/format/smartQuote'
import './style'

const DemoHeader = ({
    band,
    project,
    projectUrl,
    overviewUrl,
    email,
    src,
}) => (
    <Flex
        {...{
            className: cx(
                'DemoHeader',
            ),
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
            }}
        >
            <Flex
                {...{
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
                <Markdown>
                    {`
[project website](${projectUrl}) • [project overview](${overviewUrl})
                    `}
                </Markdown>
                {/* <Flex
                    {...{
                        justifyContent: 'normal',
                        gap: 'sm',
                    }}
                >
                    <Anchor {...{ href: projectUrl }}>
                            project website
                    </Anchor>
                    {'•'}
                    <Anchor {...{ href: overviewUrl }}>
                        project overview
                    </Anchor>
                </Flex> */}
            </Flex>
            <ContactEmail {...{ email }} />
        </Flex>
    </Flex>
)

DemoHeader.propTypes = {
    className: PropTypes.string,
    band: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    overviewUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default DemoHeader
