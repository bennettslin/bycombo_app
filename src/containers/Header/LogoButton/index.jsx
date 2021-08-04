import React from 'react'
import cx from 'classnames'
import Button from '../../../components/Button'
import Svg from '../../../components/Svg'
import byCombo from '../../../assets/svgs/byCombo.svg'
import { HOME_PAGE } from '../../../constants/pages'
import './style'

const LogoButton = () => (
    <Button
        {...{
            className: cx(
                'LogoButton',
            ),
            gaLabel: 'LogoButton',
            pageLink: HOME_PAGE,
        }}
    >
        <Svg
            {...{
                src: byCombo,
            }}
        />
    </Button>
)

export default LogoButton
