import React from 'react'
import cx from 'classnames'
import './style'

const SubFooter = () => (
    <div
        {...{
            className: cx(
                'SubFooter',
            ),
        }}
    >
        {`© ${new Date().getFullYear()} BYCombo`}
    </div>
)

export default SubFooter
