import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'

const FollowButtons = () => (
    <Flex
        {...{
            className: cx(
                'FollowButtons',
            ),
            flexDirection: 'column',
            alignItems: 'normal',
            gap: 'xs',
        }}
    >
        <label>Follow BYCombo:</label>
        <Flex
            {...{
                className: cx(
                    'FollowButtons__buttons',
                ),
                gap: 'xs',
            }}
        >
        </Flex>
    </Flex>
)

export default FollowButtons
