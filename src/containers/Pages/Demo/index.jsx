import React from 'react'
import PropTypes from 'prop-types'
import removeMarkdown from 'remove-markdown'
import Page from '../../Page'
import DemoHeader from '../../../components/DemoHeader'
import { getFormattedText } from '../../../utils/format'

const DemoPage = ({
    advancementText,
    otherProjectsText,
    project,
    description,
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
                `
**How does this advance the art form?**

${advancementText}

**What other projects does this band have?**

${otherProjectsText}
                `,
            ],
        }}
    />
)

DemoPage.propTypes = {
    project: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    advancementText: PropTypes.string.isRequired,
    otherProjectsText: PropTypes.string.isRequired,
}

export default DemoPage
