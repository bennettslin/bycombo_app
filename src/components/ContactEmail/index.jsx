import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const CONTACT_EMAIL = 'info@bycombo.com'

const ContactEmail = ({ email }) => (
    <div
        {...{
            className: cx(
                'ContactEmail',
                email ?
                    'font__finePrint' : [
                        'ContactEmail__heading',
                        'font__heading',
                    ],
            ),
        }}
    >
        {(email || CONTACT_EMAIL).split('').map((character, index) => (
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

ContactEmail.propTypes = {
    email: PropTypes.string,
}

export default ContactEmail
