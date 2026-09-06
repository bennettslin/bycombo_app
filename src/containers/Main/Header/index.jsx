import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import PageRow from '../../Page/PageRow'
import HomeButton from './HomeButton'
import Menu from './Menu'
import { getWindow } from '../../../utils/browser'
import './style'

const
    SHADOW_CLASSNAME = 'HeaderFrame__shadow',
    BUFFER_HEIGHT = 10

const Header = () => {
    const
        headerElement = useRef(null)

    /**
     * FIXME: Code to position header based on scrolling. Unfortunately, copied
     * from elsewhere because my frontend skills are rusty at this point.
     */
    useEffect(() => {
        let
            lastScrollY = getWindow().scrollY,
            absoluteTop = 0,
            styledTop = 0,
            isFixedPosition = true,
            isFixedVisible = true

        const handleScroll = () => {
            const
                currentScrollY = getWindow().scrollY,
                el = headerElement.current,
                headerHeight = el.offsetHeight

            // It's scrolling down.
            if (currentScrollY > lastScrollY) {
                if (isFixedPosition && isFixedVisible) {
                    // Lock at current scroll position.
                    isFixedPosition = false
                    absoluteTop = currentScrollY
                    styledTop = absoluteTop
                } else if (!isFixedPosition) {
                    // Check if header has scrolled entirely out of view.
                    if (currentScrollY >= absoluteTop + headerHeight) {
                        isFixedPosition = true
                        isFixedVisible = false
                        styledTop = -headerHeight
                    }
                }
            // It's scrolling up.
            } else {
                if (isFixedPosition && !isFixedVisible) {
                    // Lock just above current viewport.
                    isFixedPosition = false
                    absoluteTop = currentScrollY - headerHeight
                    styledTop = absoluteTop
                } else if (!isFixedPosition) {
                    // Check if header has scrolled entirely into view.
                    if (currentScrollY <= absoluteTop) {
                        isFixedPosition = true
                        isFixedVisible = true
                        styledTop = 0
                    }
                }
            }

            el.style.position = isFixedPosition ? 'fixed' : 'absolute'
            el.style.top = `${styledTop}px`

            if (
                currentScrollY < BUFFER_HEIGHT ||
                absoluteTop < BUFFER_HEIGHT
            ) {
                el.classList.remove(SHADOW_CLASSNAME)
            } else {
                el.classList.add(SHADOW_CLASSNAME)
            }

            lastScrollY = currentScrollY
        }

        getWindow().addEventListener('scroll', handleScroll, { passive: true })
        return () => getWindow().removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Flex
            {...{
                className: cx(
                    'HeaderFrame',
                ),
                ref: headerElement,
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
