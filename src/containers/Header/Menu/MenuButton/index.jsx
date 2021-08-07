import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import { getMapIsSelectedPage } from '../../../../redux/page/selector'
import './style'

const MenuButton = ({ pageLink, children }) => {
    const isSelectedPage = useSelector(getMapIsSelectedPage(pageLink))

    return (
        <Button
            {...{
                className: cx(
                    'MenuButton',
                    `MenuButton__${pageLink}`,
                    'Sexsmith',
                ),
                gaLabel: `MenuButton: ${pageLink}`,
                pageLink,
                isSelected: isSelectedPage,
            }}
        >
            {children}
        </Button>
    )
}

MenuButton.propTypes = {
    pageLink: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

export default MenuButton
