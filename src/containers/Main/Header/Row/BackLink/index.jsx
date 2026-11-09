import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Flex from '../../../../../components/Flex'
import BackButton from '../../../../../components/CustomButton/BackButton'
import { getMapDoShowBackLink } from '../../../../../redux/page/selector'

const BackLink = () => {
    const doShowBackLink = useSelector(getMapDoShowBackLink)

    return doShowBackLink && (
        <Flex
            {...{
                className: cx(
                    'BackLink',
                    'fontSize__sm',
                ),
                gap: 'xs',
            }}
        >
            <BackButton isInMenu />
            <label>
                Go back
            </label>
        </Flex>
    )
}

export default BackLink
