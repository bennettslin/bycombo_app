import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import PageRow from '../../../Page/Row'
import HomeButton from '../HomeButton'
import Menu from '../Menu'
import ShareLink from '../../../Page/Row/ShareLink'
import { getMapDoShowBackLink } from '../../../../redux/page/selector'
import './style'

const HeaderWrapper = () => {
    const doShowBackLink = useSelector(getMapDoShowBackLink)

    return (
        <Flex
            {...{
                className: cx(
                    'HeaderWrapper',
                    doShowBackLink && 'HeaderWrapper__backLink',
                ),
                justifyContent: 'spaceBetween',
                alignItems: 'stretch',
                gap: 'xs',
            }}
        >
            {doShowBackLink ? <PageRow /> : (
                <>
                    <HomeButton />
                    <Flex
                        {...{
                            flexDirection: 'column',
                            justifyContent: 'spaceBetween',
                            alignItems: 'flexEnd',
                        }}
                    >
                        <Menu />
                        <ShareLink />
                    </Flex>
                </>
            )}
        </Flex>
    )
}

export default HeaderWrapper
