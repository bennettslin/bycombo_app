import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import HeaderWrapper from './Wrapper'
import { getWindow } from '../../../utils/browser'
import { getMapDoShowBackLink, mapSelectedPagePath } from '../../../redux/page/selector'
import { setHeaderMode, setHeaderStyle, setClassName } from './helper'
import './style'

const Header = () => {
    const
        headerRef = useRef(null),
        selectedPagePath = useSelector(mapSelectedPagePath),
        doShowBackLink = useSelector(getMapDoShowBackLink),
        doShowBackLinkRef = useRef(doShowBackLink)

    // Pass latest value to window's event listener.
    useEffect(() => {
        doShowBackLinkRef.current = doShowBackLink
    }, [doShowBackLink])

    // Implement sticky header.
    useEffect(() => {
        let headerMode = {
            isFixedPosition: true,
            isFixedVisible: true,
            absoluteTop: 0,
            styledTop: 0,
            previousScrollY: NaN,
        }

        const handleScroll = () => {
            headerMode = setHeaderMode(headerMode, doShowBackLinkRef.current)
            setHeaderStyle(headerRef, headerMode)
            setClassName(headerRef, headerMode, doShowBackLinkRef.current)
        }

        handleScroll()

        getWindow().addEventListener('scroll', handleScroll, { passive: true })
        return () => getWindow().removeEventListener('scroll', handleScroll)
    }, [selectedPagePath])

    return (
        <Flex
            {...{
                className: cx(
                    'Header',
                ),
                ref: headerRef,
            }}
        >
            {/* Header is 100% width for shadow. Wrapper is page width. */}
            <HeaderWrapper />
        </Flex>
    )
}

export default Header
