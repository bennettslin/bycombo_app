import React from 'react'
import PropTypes from 'prop-types'
import Page from '../../Page'
import DemoHeader from '../../../components/DemoHeader'

const DemoPage = ({
    advancementText,
    otherProjectsText,
    ...rest
}) => (
    <Page
        {...{
            body: [
                (
                    <DemoHeader {...rest} />
                ),
                `
**How does this project advance the art form?**

${advancementText}

**What other projects does this band have?**

${otherProjectsText}
                `,
            ],
        }}
    />
)

DemoPage.propTypes = {
    advancementText: PropTypes.string.isRequired,
    otherProjectsText: PropTypes.string.isRequired,
}

export default DemoPage
