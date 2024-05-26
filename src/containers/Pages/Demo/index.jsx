import React from 'react'
import PropTypes from 'prop-types'
import removeMarkdown from 'remove-markdown'
import Page from '../../Page'
import DemoHeader from '../../../components/DemoHeader'
import { getFormattedText } from '../../../utils/format'

const DemoPage = ({
    band,
    project,
    description,
    body,
    ...rest
}) => (
    <Page
        {...{
            metaTitle: `${project} | ${band}`,
            metaDescription: removeMarkdown(
                getFormattedText(description),
            ),
            body: [
                (
                    <DemoHeader
                        {...{
                            band,
                            project,
                            description,
                            ...rest,
                        }}
                    />
                ),
                description,
                body,
            ],
        }}
    />
)

DemoPage.propTypes = {
    band: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default DemoPage
