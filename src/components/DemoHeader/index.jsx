import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Anchor from '../Anchor'
import ContactEmail from '../ContactEmail'
import Flex from '../Flex'
import Image from '../Image'
import Heading from '../Heading'
import { getFormattedText } from '../../utils/format'
import './style'

const DemoHeader = ({
    band,
    project,
    bandUrl,
    projectUrl,
    onesheetUrl,
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
                <Heading noId {...{ level: 1 }}>
                    <Anchor
                        noVisited
                        {...{
                            href: projectUrl,
                        }}
                    >
                        <i>{getFormattedText(project)}</i>
                    </Anchor>
                </Heading>
                <Heading noId {...{ level: 2 }}>
                    <Anchor
                        noVisited
                        {...{
                            href: bandUrl,
                        }}
                    >
                        {getFormattedText(band)}
                    </Anchor>
                </Heading>
                <Anchor
                    noVisited
                    {...{
                        href: onesheetUrl,
                    }}
                >
                    onesheet
                </Anchor>
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
    bandUrl: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    onesheetUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default DemoHeader
