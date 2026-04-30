import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'gatsby'
import { updateIsPointerDown } from '../../redux/page/action'
import { mapIsPointerDown } from '../../redux/page/selector'
import { getInternalLinkForPath } from '../../utils/pages/path'
import { getFinalHref, getInternalLink } from './helper'

const Anchor = ({
    noVisited,
    className,
    analyticsLabel,
    href,
    pagePath,
    handleAnchorClick = () => {},
    children,

}) => {
    const
        dispatch = useDispatch(),
        isPointerDown = useSelector(mapIsPointerDown),
        internalLink = getInternalLink({
            href,
            pagePath,
        }),
        finalHref = getFinalHref(href),
        Tag = internalLink ? Link : 'a'

    const onPointerDown = () => {
        dispatch(
            updateIsPointerDown(true),
        )
    }

    const handlePointerReset = () => {
        dispatch(
            updateIsPointerDown(),
        )
    }

    const onClick = () => {
        if (analyticsLabel || internalLink) {
            logEvent(
                'Anchor',
                analyticsLabel || internalLink,
            )
        }

        handleAnchorClick()
        handlePointerReset()
    }

    return (
        <Tag
            {...{
                className: cx(
                    'Anchor',
                    'colour__link',
                    !noVisited && 'Anchor__showVisited',
                    className,
                ),
                ...internalLink && {
                    to: getInternalLinkForPath({
                        path: internalLink,
                        isPointerDown,
                    }),
                },
                ...!internalLink && finalHref && {
                    href: finalHref,
                    // Open in new tab only if it's not an internal page link.
                    ...finalHref[0] !== '#' && {
                        target: '_blank',
                    },
                },
                onClick,

                // Don't call onPointerUp, because it fires before onClick.
                onPointerDown,
                onPointerCancel: handlePointerReset,
                onPointerLeave: handlePointerReset,
            }}
        >
            {children}
        </Tag>
    )
}

Anchor.propTypes = {
    noVisited: PropTypes.bool,
    className: PropTypes.string,
    analyticsLabel: PropTypes.string,
    href: PropTypes.string,
    pagePath: PropTypes.string,
    handleAnchorClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Anchor
