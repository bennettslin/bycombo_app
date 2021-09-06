import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ShareButton from '..'
import Svg from '../../../Svg'
import facebook from '../../../../assets/svgs/facebook.svg'
import { mapSelectedPage } from '../../../../redux/page/selector'
import { openSocialMediaPopup } from '../../../../utils/socialMedia'
import { FACEBOOK_KEY } from '../../../../constants/socialMedia'

const FacebookButton = () => {
    const selectedPage = useSelector(mapSelectedPage)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            page: selectedPage,
            brandId: FACEBOOK_KEY,
            socialMediaKey: 'share',
        })
    }

    return (
        <ShareButton
            {...{
                className: cx(
                    'FacebookButton',
                ),
                id: FACEBOOK_KEY,
                handleButtonClick,
            }}
        >
            <Svg
                {...{
                    src: facebook,
                }}
            />
        </ShareButton>
    )
}

export default FacebookButton
