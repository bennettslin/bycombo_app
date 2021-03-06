import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Anchor from '../Anchor'
import DemoLinkContent from './Content'
import { getDemoLinkPath } from '../../utils/pages/path'
import './style'

const DemoLink = ({
    year,
    band,
    project,
    ...rest
}) => (
    <Anchor
        {...{
            className: cx(
                'DemoLink',
            ),
            pagePath: getDemoLinkPath({
                year,
                band,
                project,
            }),
        }}
    >
        <DemoLinkContent {...{ year, band, project, ...rest }} />
    </Anchor>
)

DemoLink.propTypes = {
    className: PropTypes.string,
    year: PropTypes.number.isRequired,
    band: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
}

export default DemoLink
