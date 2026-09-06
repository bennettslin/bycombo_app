import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import PageRow from '../../Page/PageRow'
import HomeButton from './HomeButton'
import Menu from './Menu'
import { getWindow } from '../../../utils/browser'
import './style'
import { useSelector } from 'react-redux'
import { mapSelectedPagePath } from '../../../redux/page/selector'
import { setShadowClassName } from './helper'

const Header = () => {
    const
        headerRef = useRef(null),
        selectedPagePath = useSelector(mapSelectedPagePath)

    /**
     * FIXME: Code to position header based on scrolling. Unfortunately, copied
     * from elsewhere because my frontend skills are rusty at this point.
     */
    useEffect(() => {
        let headerMode = {
            isFixedPosition: true,
            isFixedVisible: true,
            styledTop: 0,
        }

        let
            absoluteTop = 0,
            lastScrollY

        console.log('effect is called', isNaN(lastScrollY))

        const setFixedHidden = (headerMode, headerHeight) => {
            console.log('set fixed hidden')
            return {
                ...headerMode,
                isFixedPosition: true,
                isFixedVisible: false,
                styledTop: -headerHeight,
            }
        }

        const setFixedVisible = headerMode => {
            console.log('set fixed visible')
            return {
                ...headerMode,
                isFixedPosition: true,
                isFixedVisible: true,
                styledTop: 0,
            }
        }

        const setAbsolute = (headerMode, absoluteTop) => {
            console.log('set absolute')
            return {
                ...headerMode,
                isFixedPosition: false,
                styledTop: absoluteTop,
            }
        }

        const setHeaderMode = (headerMode, headerHeight, currentScrollY, lastScrollY) => {
            // The page has just loaded.
            if (isNaN(lastScrollY)) {
                if (currentScrollY >= headerHeight) {
                    return setFixedHidden(headerMode, headerHeight)
                } else if (currentScrollY <= 1) {
                    return setFixedVisible(headerMode)
                } else {
                    absoluteTop = currentScrollY - headerHeight
                    return setAbsolute(headerMode, absoluteTop)
                }

            // It's scrolling down.
            } else if (currentScrollY > lastScrollY) {
                if (headerMode.isFixedPosition && headerMode.isFixedVisible) {
                    // Lock at current scroll position.
                    absoluteTop = currentScrollY
                    return setAbsolute(headerMode, absoluteTop)
                } else if (!headerMode.isFixedPosition) {
                    // Check if header has scrolled entirely out of view.
                    if (currentScrollY >= absoluteTop + headerHeight) {
                        return setFixedHidden(headerMode, headerHeight)
                    }
                }
            // It's scrolling up.
            } else {
                if (headerMode.isFixedPosition && !headerMode.isFixedVisible) {
                    // Lock just above current viewport.
                    absoluteTop = currentScrollY - headerHeight
                    return setAbsolute(headerMode, absoluteTop)
                } else if (!headerMode.isFixedPosition) {
                    // Check if header has scrolled entirely into view.
                    if (currentScrollY <= absoluteTop) {
                        return setFixedVisible(headerMode)
                    }
                }
            }

            return headerMode
        }

        const handleScroll = () => {
            const
                currentScrollY = getWindow().scrollY,
                el = headerRef.current,
                headerHeight = el.offsetHeight

            headerMode = setHeaderMode(headerMode, headerHeight, currentScrollY, lastScrollY)

            el.style.position = headerMode.isFixedPosition ? 'fixed' : 'absolute'
            el.style.top = `${headerMode.styledTop}px`

            setShadowClassName({
                headerRef,
                currentScrollY,
                absoluteTop,
            })

            console.log('last to current scroll y', lastScrollY, currentScrollY, headerHeight)
            lastScrollY = currentScrollY
        }

        handleScroll()

        getWindow().addEventListener('scroll', handleScroll, { passive: true })
        return () => getWindow().removeEventListener('scroll', handleScroll)
    }, [selectedPagePath])

    return (
        <Flex
            {...{
                className: cx(
                    'HeaderFrame',
                ),
                ref: headerRef,
            }}
        >
            <Flex
                {...{
                    className: cx(
                        'HeaderWrapper',
                    ),
                    flexDirection: 'column',
                    gap: 'xs',
                }}
            >
                <Flex
                    {...{
                        className: cx(
                            'Header',
                        ),
                        justifyContent: 'spaceBetween',
                        gap: 'xs',
                    }}
                >
                    <HomeButton />
                    <Menu />
                </Flex>
                <PageRow />
            </Flex>
        </Flex>
    )
}

export default Header
