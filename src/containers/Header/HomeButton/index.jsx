import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import Svg from '../../../components/Svg'
import byCombo from '../../../assets/svgs/byCombo.svg'
import { HOME_PAGE } from '../../../constants/pages'
import './style'

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
                src: byCombo,
            }}
        />
    </HeaderButton>
)

export default HomeButton
