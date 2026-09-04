import React from 'react'
import { useSelector } from 'react-redux'
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
        <Flex {...{ gap: 'xs' }} >
            <BackButton isInMenu />
            <label
                {...{
                    className: 'RowLink',
                }}
            >
                {backButtonText}
            </label>
        </Flex>
    )
}

export default BackLink
