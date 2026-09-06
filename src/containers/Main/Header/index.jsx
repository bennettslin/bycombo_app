import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import PageRow from '../../Page/PageRow'
import HomeButton from './HomeButton'
import Menu from './Menu'
import { getWindow } from '../../../utils/browser'
import { mapSelectedPagePath } from '../../../redux/page/selector'
import { setHeaderMode, setShadowClassName } from './helper'
import './style'

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
            absoluteTop: 0,
            styledTop: 0,
        }

        let lastScrollY

        console.log('effect is called', isNaN(lastScrollY))

        const handleScroll = () => {
            const
                currentScrollY = getWindow().scrollY,
                { current: headerElement } = headerRef,
                { offsetHeight: headerHeight } = headerElement

            headerMode = setHeaderMode(headerMode, headerHeight, currentScrollY, lastScrollY)

            headerElement.style.position = headerMode.isFixedPosition ? 'fixed' : 'absolute'
            headerElement.style.top = `${headerMode.styledTop}px`

            setShadowClassName({
                headerRef,
                currentScrollY,
                absoluteTop: headerMode.absoluteTop,
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
