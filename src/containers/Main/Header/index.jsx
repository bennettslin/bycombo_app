import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import StyledFrame from '../StyledFrame'
import PageRow from '../../Page/PageRow'
import HomeButton from './HomeButton'
import Menu from './Menu'
import { getWindow } from '../../../utils/browser'
import './style'

const
    /**
     * FIXME: Hard-coded values because my frontend skills are rusty at this
     * point, and we're in the home stretch of this project.
     */
    xsBreakpointHeight = 154,
    smBreakpointHeight = 163,
    mdBreakpointHeight = 208,
    smBreakpointWidth = 633.536,
    mdBreakpointWidth = 800

const MainHeader = () => {
    const
        [translateY, setTranslateY] = useState(0),
        headerHeight = useRef(xsBreakpointHeight)

    /**
     * FIXME: Code to position header based on scrolling. Unfortunately, copied
     * from elsewhere because my frontend skills are rusty at this point.
     */
    useEffect(() => {
        let lastScrollY = getWindow().scrollY

        const handleScroll = () => {
            const currentScrollY = getWindow().scrollY
            const deltaY = currentScrollY - lastScrollY

            setTranslateY((prev) => {
                const next = prev - deltaY
                return Math.max(-headerHeight.current, Math.min(0, next))
            })

            lastScrollY = currentScrollY
        }

        getWindow().addEventListener('scroll', handleScroll, { passive: true })
        return () => getWindow().removeEventListener('scroll', handleScroll)
    }, [])

    // Set new header height based on window resize.
    useEffect(() => {
        const handleResize = () => {
            let newHeight = xsBreakpointHeight
            const windowWidth = getWindow().innerWidth

            if (windowWidth >= smBreakpointWidth) {
                newHeight = smBreakpointHeight
            }

            if (windowWidth >= mdBreakpointWidth) {
                newHeight = mdBreakpointHeight
            }

            headerHeight.current = newHeight
        }

        getWindow().addEventListener('resize', handleResize, { passive: true })
        return () => getWindow().removeEventListener('resize', handleResize)
    }, [])

    return (
        <StyledFrame
            {...{
                className: cx(
                    'MainHeaderFrame',
                ),
                style: {
                    top: `${translateY}px`,
                },
            }}
        >
            <Flex
                {...{
                    flexDirection: 'column',
                    gap: 'xs',
                }}
            >
                <Flex
                    {...{
                        className: cx(
                            'MainHeader',
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
        </StyledFrame>
    )
}

export default MainHeader
