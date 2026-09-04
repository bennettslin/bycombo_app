import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import Anchor from '../Anchor'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import { getFormattedText } from '../../utils/format'
import './style'
import { mapSelectedChildPagePath } from '../../redux/page/selector'

const Markdown = ({
    children,
}) => {
    const
        childPagePath = useSelector(mapSelectedChildPagePath),
        isAllPage = childPagePath === 'all'

    return (
        <ReactMarkdown
            {...{
                className: cx(
                    'Markdown',
                ),
                components: {
                    a: Anchor,
                    h1: ({ children }) => (
                        <Heading>{children}</Heading>
                    ),
                    /**
                     * To render forward button on "all" commentaries or
                     * references page.
                     */
                    h3: ({ children }) => (
                        <Heading {...{ level: 3, isAllPage }}>
                            {children}
                        </Heading>
                    ),
                    h5: ({ children }) => (
                        <Heading {...{ level: 5 }}>{children}</Heading>
                    ),
                    p: Paragraph,
                },
            }}
        >
            {getFormattedText(children)}
        </ReactMarkdown>
    )
}

Markdown.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Markdown
