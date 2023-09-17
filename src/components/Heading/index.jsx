import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Flex from '../Flex'
import HeadingButton from './HeadingButton'
import { mapDoShowBackButton } from '../../redux/page/selector'
import { getLinkId } from '../../utils/format/markdown'
import './style'

const Heading = ({
    level = 1,
    children,
}) => {
    if (!children) {
        return null
    }

    const
        doShowBackButton = useSelector(mapDoShowBackButton),
        Tag = `h${level}`,
        linkId = getLinkId(children),
        headingElement = (
            <Tag
                {...{
                    className: cx(
                        'Heading',
                        'font__heading',
                    ),
                    id: linkId,
                }}
            >
                {children}
            </Tag>
        )

    // All h3 headings have a heading button.
    return level === 3 ? (
        <Flex
            {...{
                justifyContent: 'normal',
                gap: 'xs',
            }}
        >
            {headingElement}
            <HeadingButton {...{ linkId, doShowBackButton }} />
        </Flex>
    ) : headingElement
}

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    children: PropTypes.node.isRequired,
}

export default Heading
