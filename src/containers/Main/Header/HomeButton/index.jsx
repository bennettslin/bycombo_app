import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import Svg from '../../../../components/Svg'
import logo from '../../../../assets/svgs/app/logo'
import { HOME_PAGE } from '../../../../constants/pages'

const HomeButton = () => (
    <HeaderButton
        {...{
            className: cx(
                'HomeButton',
            ),
            pagePath: HOME_PAGE,
        }}
    >
        <Svg
            {...{
                src: logo,
                scaleFactor: 0.66,
            }}
        />
    </HeaderButton>
)

export default HomeButton
