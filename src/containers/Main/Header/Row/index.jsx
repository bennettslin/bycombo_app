import React, { useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../../contexts/PageConfig'
import HomeButton from '../../../Main/Header/HomeButton'
import BackLink from './BackLink'
import ShareLink from './ShareLink'
import './style'

const HeaderRow = () => {
    const { is404Page } = useContext(PageConfigContext)

    if (is404Page) {
        return null
    }

    return (
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
}

export default HeaderRow
