import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../../Flex'
import Image from '../../Image'
import Markdown from '../../Markdown'
import Heading from '../../Heading'
import { getFormattedText } from '../../../utils/format'
import './style'

const DemoLinkContent = ({
    band,
    project,
    description,
    src,
}) => (
    <Flex
        {...{
            className: cx(
                'DemoLinkContent',
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
            <Flex>
                <Image
                    {...{
                        className: cx(
                            'DemoLinkContent__image',
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
                <Heading {...{ level: 2 }}>
                    <i>{getFormattedText(project)}</i>
                </Heading>
                <Heading {...{ level: 3 }}>
                    {getFormattedText(band)}
                </Heading>
                <Markdown>
                    {description}
                </Markdown>
            </Flex>
        </Flex>
    </Flex>
)

DemoLinkContent.propTypes = {
    className: PropTypes.string,
    band: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

export default DemoLinkContent
