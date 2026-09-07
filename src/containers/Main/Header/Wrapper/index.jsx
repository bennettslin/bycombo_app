import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import DefaultLayout from '../DefaultLayout'
import { getMapDoShowBackLink } from '../../../../redux/page/selector'
import './style'

const Wrapper = () => {
    const doShowBackLink = useSelector(getMapDoShowBackLink)

    return (
        <Flex
            {...{
                className: cx(
                    'HeaderWrapper',
                ),
                justifyContent: 'spaceBetween',
                alignItems: 'stretch',
                gap: 'xs',
            }}
        >
            {doShowBackLink ? <DefaultLayout /> : <DefaultLayout />}
        </Flex>
    )
}

export default Wrapper
