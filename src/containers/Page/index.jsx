import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import PageConfigContext from '../../contexts/PageConfig'
import TopLevelShareRow from './Footer/TopLevelShareRow'
import StyledPage from './StyledPage'
import TabbedMenu from './TabbedMenu'
import Body from './Body'
import PageFooter from './Footer'
import Flex from '../../components/Flex'
import Helmet from '../../components/Helmet'
import { updateSelectedPagePath } from '../../redux/page/action'
import './style'

const Page = ({
    children,
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
        <PageConfigContext.Provider {...{ value: rest }}>
            <Helmet {...{ metaTitle, metaDescription }} />
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
                        <TopLevelShareRow />
                        <TabbedMenu />
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
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
    topLevelPage: PropTypes.string,
    pageHeading: PropTypes.string,
    title: PropTypes.string,
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
