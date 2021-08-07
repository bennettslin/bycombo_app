import React from 'react'
// import cx from 'classnames'
// import Button from '../../../components/Button'
import MenuButton from '../Menu/MenuButton'
import Svg from '../../../components/Svg'
import byCombo from '../../../assets/svgs/byCombo.svg'
import { HOME_PAGE } from '../../../constants/pages'
import './style'

const LogoButton = () => (
    <MenuButton
        {...{
            // className: cx(
            //     'LogoButton',
            // ),
            // gaLabel: 'LogoButton',
            pageLink: HOME_PAGE,
        }}
    >
        <Svg
            {...{
                src: byCombo,
            }}
        />
    </MenuButton>
)

export default LogoButton
