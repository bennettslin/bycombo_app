import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import DefaultWrapper from './DefaultWrapper'
import { getWindow } from '../../../utils/browser'
import { mapSelectedPagePath } from '../../../redux/page/selector'
import { setHeaderMode, setHeaderStyle, setShadowClassName } from './helper'
import './style'

const Header = () => {
    const
        headerRef = useRef(null),
        selectedPagePath = useSelector(mapSelectedPagePath)

    // Code for sticky header.
    useEffect(() => {
        let headerMode = {
            isFixedPosition: true,
            isFixedVisible: true,
            absoluteTop: 0,
            styledTop: 0,
            lastScrollY: NaN,
        }

        const handleScroll = () => {
            headerMode = setHeaderMode(headerMode)
            setHeaderStyle(headerRef, headerMode)
            setShadowClassName(headerRef, headerMode)
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
            <DefaultWrapper />
        </Flex>
    )
}

export default Header
