import React, { useState } from 'react'
import cx from 'classnames'
import * as EmailValidator from 'email-validator'
import {
    EMAIL_ACTION,
    EMAIL_NAME,
    EMAIL_DUMMY_NAME,
    EMAIL_ID,
} from '../../constants/website'
import './style'

const MailingList = () => {
    const
        [isValidEmail, setIsValidEmail] = useState(false),
        [emailValue, setEmailValue] = useState('')

    const onFocus = () => {
        logEvent(
            'MailingList',
            'email'
        )
    }

    const onClick = () => {
        logEvent(
            'MailingList',
            'submit'
        )
    }

    const onChange = ({ target: { value } }) => {
        const emailValue = value.replace(' ', '')

        setIsValidEmail(EmailValidator.validate(emailValue))
        setEmailValue(emailValue)
    }

    return (
        <form
            noValidate
            {...{
                className: cx(
                    'MailingList',
                ),
                action: EMAIL_ACTION,
                method: 'post',
                target: '_blank',
            }}
        >
            <label
                {...{
                    className: cx(
                        'MailingList__label',
                        'Birra'
                    ),
                }}
            >
                Mailing List
            </label>
            <div
                {...{
                    className: cx(
                        'MailingList__inputs'
                    ),
                }}
            >
                <input
                    required
                    {...{
                        className: cx(
                            'MailingList__emailField',
                            'MailingList__input',
                            'Asap'
                        ),
                        id: EMAIL_ID,
                        name: EMAIL_NAME,
                        type: 'text',
                        value: emailValue,
                        placeholder: 'Email address',
                        autoComplete: 'off',
                        maxLength: 254,
                        onFocus,
                        onChange,
                    }}
                />
                {/* Honeypot field to prevent bot signups. */}
                <div
                    {...{
                        style: {
                            position: 'absolute',
                            left: '-5000px',
                        },
                        'aria-hidden': true,
                    }}
                >
                    <input
                        {...{
                            name: EMAIL_DUMMY_NAME,
                            type: 'text',
                            defaultValue: '',
                            tabIndex: -1,
                        }}
                    />
                </div>
                <input
                    {...{
                        className: cx(
                            'MailingList__submitButton',
                            'MailingList__input',
                            'Asap'
                        ),
                        type: 'submit',
                        value: 'Sign up!',
                        disabled: !isValidEmail,
                        onClick,
                    }}
                />
            </div>
        </form>
    )
}

export default MailingList
