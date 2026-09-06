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
        let
            absoluteTop = 0,
            styledTop = 0,
            isFixedPosition = true,
            isFixedVisible,
            lastScrollY

        console.log('effect is called', isNaN(lastScrollY))

        const setFixedHidden = headerHeight => {
            console.log('set fixed hidden')
            isFixedPosition = true
            isFixedVisible = false
            styledTop = -headerHeight
        }

        const setFixedVisible = () => {
            console.log('set fixed visible')
            isFixedPosition = true
            isFixedVisible = true
            styledTop = 0
        }

        const setAbsolute = absoluteTop => {
            console.log('set absolute')
            isFixedPosition = false
            styledTop = absoluteTop
        }

        const handleScroll = () => {
            const
                currentScrollY = getWindow().scrollY,
                el = headerRef.current,
                headerHeight = el.offsetHeight

            // The page has just loaded.
            if (isNaN(lastScrollY)) {
                if (currentScrollY >= headerHeight) {
                    setFixedHidden(headerHeight)
                } else if (currentScrollY <= 1) {
                    setFixedVisible()
                } else {
                    absoluteTop = currentScrollY - headerHeight
                    setAbsolute(absoluteTop)
                }

            // It's scrolling down.
            } else if (currentScrollY > lastScrollY) {
                if (isFixedPosition && isFixedVisible) {
                    // Lock at current scroll position.
                    absoluteTop = currentScrollY
                    setAbsolute(absoluteTop)
                } else if (!isFixedPosition) {
                    // Check if header has scrolled entirely out of view.
                    if (currentScrollY >= absoluteTop + headerHeight) {
                        setFixedHidden(headerHeight)
                    }
                }
            // It's scrolling up.
            } else {
                if (isFixedPosition && !isFixedVisible) {
                    // Lock just above current viewport.
                    absoluteTop = currentScrollY - headerHeight
                    setAbsolute(absoluteTop)
                } else if (!isFixedPosition) {
                    // Check if header has scrolled entirely into view.
                    if (currentScrollY <= absoluteTop) {
                        setFixedVisible()
                    }
                }
            }

            el.style.position = isFixedPosition ? 'fixed' : 'absolute'
            el.style.top = `${styledTop}px`

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
