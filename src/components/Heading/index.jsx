import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Flex from '../Flex'
import BackButton from './BackButton'
import { mapIsHashedPage } from '../../redux/page/selector'
import { getLinkId } from '../../utils/format/markdown'
import './style'

const Heading = ({
    level = 1,
    children,
}) => {
    const
        showBackButton = useSelector(mapIsHashedPage),
        Tag = `h${level}`,
        headingElement = (
            <Tag
                {...{
                    className: cx(
                        'Heading',
                        'font__heading',
                    ),
                    id: getLinkId(children),
                }}
            >
                {children}
            </Tag>
        )

    return Boolean(children) && showBackButton ? (
        <Flex
            {...{
                justifyContent: 'normal',
                gap: 'xs',
            }}
        >
            {headingElement}
            <BackButton {...{ showBackButton }} />
        </Flex>
    ) : headingElement
}

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    children: PropTypes.node.isRequired,
}

export default Heading
