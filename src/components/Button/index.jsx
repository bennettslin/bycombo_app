import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import { Link } from 'gatsby'
import ButtonAnimatable from './Animatable'
import Tooltip from './Tooltip'
import { updateSelectedPage } from '../../redux/page/action'
import { getPathForPage } from '../../constants/pages'
import './style'

const Button = forwardRef(({
    className,
    gaLabel,
    pageLink,
    href,
    tooltipId,
    tooltipText,
    isTooltipSuccess,
    handleButtonClick = () => {},
    handleTooltipHide = () => {},
    children,

}, ref) => {
    const
        dispatch = useDispatch(),
        isTooltipEnabled = Boolean(tooltipId)

    const onClick = e => {
        if (pageLink) {
            dispatch(updateSelectedPage(pageLink))
        }

        if (gaLabel) {
            logEvent(
                'Button',
                gaLabel,
            )
        }

        handleButtonClick(e)
    }

    let Tag = 'button'

    if (href) {
        Tag = 'a'
    } else if (pageLink) {
        Tag = Link
    }

    return (
        <Tag
            {...{
                ref,
                className: cx(
                    'Button',
                    className
                ),
                onClick,
                ...pageLink && {
                    to: getPathForPage(pageLink),
                },
                ...href && {
                    href,
                    target: '_blank',
                },
                ...isTooltipEnabled && {
                    'data-for': tooltipId,
                    'data-tip': tooltipText,
                },
            }}
        >
            <ButtonAnimatable>
                {children}
            </ButtonAnimatable>
            {isTooltipEnabled && (
                <Tooltip
                    {...{
                        tooltipId,
                        isTooltipSuccess,
                        handleTooltipHide,
                    }}
                />
            )}
        </Tag>
    )
})

Button.propTypes = {
    className: PropTypes.string,
    gaLabel: PropTypes.string.isRequired,
    pageLink: PropTypes.string,
    href: PropTypes.string,
    tooltipId: PropTypes.string,
    tooltipText: PropTypes.string,
    isTooltipShown: PropTypes.bool,
    isTooltipSuccess: PropTypes.bool,
    handleButtonClick: PropTypes.func,
    handleTooltipHide: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Button
