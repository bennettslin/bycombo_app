import React from 'react'
import cx from 'classnames'
import './style'

const AppFooter = () => (
    <div
        {...{
            className: cx(
                'AppFooter',
                'fontSize__sm',
            ),
        }}
    >
        {`© ${new Date().getFullYear()} BYCombo`}
    </div>
)

export default AppFooter
