import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import Svg from '../../../../components/Svg'
import byCombo from '../../../../assets/svgs/app/byCombo'
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
                src: byCombo,
                scaleFactor: 0.66,
            }}
        />
    </HeaderButton>
)

export default HomeButton
