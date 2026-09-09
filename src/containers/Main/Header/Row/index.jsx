import React from 'react'
import cx from 'classnames'
import HomeButton from '../../../Main/Header/HomeButton'
import BackLink from './BackLink'
import ShareLink from './ShareLink'
import './style'

const HeaderRow = () => (
    <div
        {...{
            className: cx(
                'HeaderRow',
            ),
        }}
    >
        <BackLink />
        <HomeButton isInRow />
        <ShareLink />
    </div>
)

export default HeaderRow
