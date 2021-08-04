import React from 'react'
import Paragraph from '../Paragraph'
import Anchor from '../Anchor'
import { ESSAYS_PAGE } from '../../constants/pages'
import './style'

const EssaysLink = () => (
    <Paragraph
        {...{
            className: 'EssaysLink',
        }}
    >
        <Anchor
            {...{
                pageLink: ESSAYS_PAGE,
                gaLabel: `EssaysLink: ${ESSAYS_PAGE}`,
            }}
        >
            back to Essays
        </Anchor>
    </Paragraph>
)

export default EssaysLink
