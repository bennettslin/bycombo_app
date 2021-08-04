import React from 'react'
import PropTypes from 'prop-types'
import Body from '../Body'
import EssayFooter from './EssayFooter'
import Markdown from '../../../components/Markdown'
import Heading from '../../../components/Heading'
import { getMonthName } from './helper'

const EssayBody = ({
    title,
    year,
    month,
    day,
    children,
}) => (
    <>
        <Body {...{ title }}>
            {year && month && day && (
                <Heading {...{ level: 5 }}>
                    {`${day} ${getMonthName(month)} ${year}`}
                </Heading>
            )}
            <Markdown>
                {children}
            </Markdown>
        </Body>
        <EssayFooter />
    </>
)

EssayBody.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number,
    children: PropTypes.string.isRequired,
}

export default EssayBody
