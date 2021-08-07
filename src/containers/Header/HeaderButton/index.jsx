import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../components/Button'
import { getMapIsSelectedPage } from '../../../redux/page/selector'
import './style'

const HeaderButton = ({ className, pageLink, children }) => {
    const isSelectedPage = useSelector(getMapIsSelectedPage(pageLink))

    return (
        <Button
            {...{
                className: cx(
                    'HeaderButton',
                    'Sexsmith',
                    className,
                ),
                gaLabel: `HeaderButton: ${pageLink}`,
                pageLink,
                isSelected: isSelectedPage,
            }}
        >
            {children}
        </Button>
    )
}

HeaderButton.propTypes = {
    className: PropTypes.string,
    pageLink: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

export default HeaderButton
