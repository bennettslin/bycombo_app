import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import MailingListInputs from './Inputs'
import { getSmartQuotedText } from '../../utils/format/smartQuote'
import { EMAIL_ACTION } from '../../constants/website'
import './style'

const MailingList = ({ isWide }) => (
    <form
        noValidate
        {...{
            className: cx(
                'MailingList',
                isWide && 'MailingList__wide',
            ),
            action: EMAIL_ACTION,
            method: 'post',
            target: '_blank',
        }}
    >
        <label {...{ className: cx('MailingList__label') }}>
            Join the BYCombo mailing list:
        </label>
        <MailingListInputs />
        <div {...{ className: cx('font__finePrint') }}>
            {getSmartQuotedText(
                `We'll send out one email per month at most.`,
            )}
        </div>
    </form>
)

MailingList.propTypes = {
    isWide: PropTypes.bool,
}

export default MailingList
