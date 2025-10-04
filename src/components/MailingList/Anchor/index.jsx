import React from 'react'
import cx from 'classnames'
import Button from '../../Button'
import { MAILING_LIST_WEBSITE } from '../../../constants/website'

const MailingListAnchor = () => (
    <Button
        {...{
            className: cx(
                'MailingListAnchor',
                'font__heading',
                'fontSize__lg',
                'colour__link',
            ),
            analyticsLabel: 'BYComboSubstack',
            href: MAILING_LIST_WEBSITE,
        }}
    >
                Join our mailing list
    </Button>
)

export default MailingListAnchor
