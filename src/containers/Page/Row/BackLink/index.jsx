import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import BackButton from '../../../../components/CustomButton/BackButton'
import {
    getMapBackLinkText,
    getMapDoShowBackLink,
} from '../../../../redux/page/selector'

const BackLink = () => {
    const
        doShowBackLink = useSelector(getMapDoShowBackLink),
        backButtonText = useSelector(getMapBackLinkText)

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
                {backButtonText}
            </label>
        </Flex>
    )
}

export default BackLink
