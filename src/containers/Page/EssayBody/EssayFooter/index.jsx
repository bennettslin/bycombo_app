import React from 'react'
import cx from 'classnames'
import EssaysLink from '../../../../components/EssaysLink'
import ShareButtons from '../../../../components/ShareButtons'
import './style'

const EssayFooter = () => (
    <div
        {...{
            className: cx(
                'EssayFooter'
            ),
        }}
    >
        <EssaysLink />
        <ShareButtons />
    </div>
)

export default EssayFooter
