import React from 'react'
import cx from 'classnames'
import Button from '../../../components/Button'
import Svg from '../../../components/Svg'
import bobtailYearlings from '../../../assets/svgs/bobtailYearlings.svg'
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
                src: bobtailYearlings,
            }}
        />
    </Button>
)

export default LogoButton
