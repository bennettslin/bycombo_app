import React, { Fragment } from 'react'
import cx from 'classnames'
import './style'

const CONTACT_EMAIL = 'info@bycombo.com'

const ContactEmail = () => (
    <div
        {...{
            className: cx(
                'ContactEmail',
                'Sexsmith',
            ),
        }}
    >
        {CONTACT_EMAIL.split('').map((character, index) => (
            <Fragment {...{ key: index }}>
                <span {...{ style: { display: 'none' } }}>
                    {String.fromCharCode(
                        character.charCodeAt(0) + 1,
                    )}
                </span>
                {character}
            </Fragment>
        ))}
    </div>
)

export default ContactEmail
