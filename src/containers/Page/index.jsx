import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import PageConfigContext from '../../contexts/PageConfig'
import Body from './Body'
import PageFooter from './Footer'
import Flex from '../../components/Flex'
import Helmet from '../../components/Helmet'
import { updateSelectedPagePath } from '../../redux/page/action'
import { getMapDoShowBackLink } from '../../redux/page/selector'
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from '../../constants/pages'
import './style'

const Page = ({
    pageName,
    title,
    description,
    ...rest
}) => {
    const
        dispatch = useDispatch(),
        doShowBackLink = useSelector(getMapDoShowBackLink)

    useEffect(() => {
        dispatch(
            updateSelectedPagePath(),
        )
    }, [])

    return (
        <PageConfigContext.Provider
            {...{
                value: {
                    pageName,
                    title,
                    ...rest,
                },
            }}
        >
            <Helmet
                {...{
                    metaTitle: title || PAGE_TITLES[pageName],
                    metaDescription: description || PAGE_DESCRIPTIONS[pageName],
                }}
            />
            <Flex
                {...{
                    className: cx(
                        'Page',
                        doShowBackLink && 'Page__backLink',
                    ),
                    flexGrow: 1,
                    flexDirection: 'column',
                    justifyContent: 'normal',
                    alignItems: 'normal',
                    gap: 'lg',
                }}
            >
                <Body />
                <PageFooter />
            </Flex>
        </PageConfigContext.Provider>
    )
}

Page.propTypes = {
    is404Page: PropTypes.bool,
    showContactEmail: PropTypes.bool,
    pageName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number,
    }),
    body: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default Page
