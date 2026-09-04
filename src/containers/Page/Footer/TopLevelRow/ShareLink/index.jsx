import React from 'react'
import cx from 'classnames'
import Flex from '../../../../../components/Flex'
import ShareButton from '../../../../../components/CustomButton/ShareButton'
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
        <label
            {...{
                className: 'RowLink',
            }}
        >
            Share this page
        </label>
        <ShareButton />
    </Flex>
)

export default ShareLink
