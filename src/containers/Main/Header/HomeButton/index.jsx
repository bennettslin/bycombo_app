import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import Svg from '../../../../components/Svg'
import byCombo from '../../../../assets/svgs/app/byCombo'
import { HOME_PAGE } from '../../../../constants/pages'
import './style'

const HomeButton = ({ isInRow = false }) => (
    <HeaderButton
        {...{
            className: cx(
                'HomeButton',
                isInRow && 'HomeButton__row',
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

HomeButton.propTypes = {
    isInRow: PropTypes.bool,
}

export default HomeButton
