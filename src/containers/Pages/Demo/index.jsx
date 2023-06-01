import React from 'react'
import PropTypes from 'prop-types'
import removeMarkdown from 'remove-markdown'
import Page from '../../Page'
import DemoHeader from '../../../components/DemoHeader'
import { getFormattedText } from '../../../utils/format'

const DemoPage = ({
    project,
    description,
    body,
    ...rest
}) => (
    <Page
        {...{
            title: project,
            description: removeMarkdown(
                getFormattedText(description),
            ),
            body: [
                (
                    <DemoHeader
                        {...{
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
    project: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default DemoPage
