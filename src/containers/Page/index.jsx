import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import PageConfigContext from '../../contexts/PageConfig'
import TopLevelRow from './Footer/TopLevelRow'
import StyledPage from './StyledPage'
import Body from './Body'
import PageFooter from './Footer'
import Flex from '../../components/Flex'
import Helmet from '../../components/Helmet'
import { updateSelectedPagePath } from '../../redux/page/action'
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from '../../constants/pages'
import './style'

const Page = ({
    children,
    pageName,
    metaTitle,
    metaDescription,
    ...rest
}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            updateSelectedPagePath(),
        )
    }, [])

    return (
        <PageConfigContext.Provider {...{ value: { pageName, ...rest } }}>
            <Helmet
                {...{
                    metaTitle: metaTitle || PAGE_TITLES[pageName],
                    metaDescription: metaDescription || PAGE_DESCRIPTIONS[pageName],
                }}
            />
            {/* This assumes children or markdown, but never both. */}
            {children ? children : (
                <StyledPage>
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
                        <TopLevelRow />
                        <Body />
                        <PageFooter />
                    </Flex>
                </StyledPage>
            )}
        </PageConfigContext.Provider>
    )
}

Page.propTypes = {
    noShare: PropTypes.bool,
    showContactEmail: PropTypes.bool,
    children: PropTypes.node,
    pageName: PropTypes.string,
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
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
