import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import PageConfigContext from '../../contexts/PageConfig'
import StyledPage from './StyledPage'
import Body from './Body'
import PageFooter from './Footer'
import Flex from '../../components/Flex'
import Helmet from '../../components/Helmet'
import { updateSelectedPagePath } from '../../redux/page/action'
import { getMapDoShowBackLink } from '../../redux/page/selector'
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from '../../constants/pages'
import './style'

const Page = ({
    children,
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
            {/* This assumes children or markdown, but never both. */}
            {children ? children : (
                <StyledPage
                    {...{
                        className: cx(
                            'PageFrame',
                            doShowBackLink && 'PageFrame__backLink',
                        ),
                    }}
                >
                    <Flex
                        {...{
                            className: cx(
                                'Page',
                            ),
                            flexDirection: 'column',
                            justifyContent: 'normal',
                            alignItems: 'normal',
                        }}
                    >
                        <Body />
                        <PageFooter />
                    </Flex>
                </StyledPage>
            )}
        </PageConfigContext.Provider>
    )
}

Page.propTypes = {
    is404Page: PropTypes.bool,
    showContactEmail: PropTypes.bool,
    children: PropTypes.node,
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
