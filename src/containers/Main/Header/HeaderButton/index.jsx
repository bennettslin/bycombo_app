import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import { getMapIsSelectedMenuPath } from '../../../../redux/page/selector'
import './style'

const HeaderButton = ({ className, pagePath, children }) => {
    const isSelectedMenuPath = useSelector(getMapIsSelectedMenuPath(pagePath))

    return (
        <Button
            {...{
                className: cx(
                    'HeaderButton',
                    'font__heading',
                    className,
                ),
                analyticsLabel: `HeaderButton__${pagePath}`,
                pagePath,
                isSelected: isSelectedMenuPath,
            }}
        >
            {children}
        </Button>
    )
}

HeaderButton.propTypes = {
    className: PropTypes.string,
    pagePath: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default HeaderButton
