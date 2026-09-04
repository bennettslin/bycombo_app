import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import ForwardButton from '../CustomButton/ForwardButton'
import ShareButton from '../CustomButton/ShareButton'
import { getLinkId } from '../../utils/format/markdown'
import './style'

const Heading = ({
    noId,
    level = 1,
    children,
}) => {
    if (!children) {
        return null
    }

    const
        Tag = `h${level}`,
        linkId = !noId && getLinkId(children),
        headingElement = (
            <Tag
                {...{
                    className: cx(
                        'Heading',
                        'font__heading',
                    ),
                    ...!noId && { id: linkId },
                }}
            >
                {children}
            </Tag>
        )

    // H3 headings have a copy URL button by default.
    return !noId && level === 3 ? (
        <Flex
            {...{
                justifyContent: 'normal',
                gap: 'xs',
            }}
        >
            <ForwardButton {... { linkId }} />
            {headingElement}
            <ShareButton {... { linkId }} />
        </Flex>
    ) : headingElement
}

Heading.propTypes = {
    noId: PropTypes.bool,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    children: PropTypes.node.isRequired,
}

export default Heading
