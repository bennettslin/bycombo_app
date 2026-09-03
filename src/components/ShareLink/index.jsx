import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import ShareButton from './ShareButton'
import './style'

const ShareLink = () => (
    <Flex
        {...{
            className: cx(
                'ShareLink',
            ),
            gap: 'xs',
        }}
    >
        <label {...{ className: 'ShareLink__label' }}>
            Share this page
        </label>
        <ShareButton />
    </Flex>
)

export default ShareLink
