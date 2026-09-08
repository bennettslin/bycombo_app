import React, { Fragment, useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../contexts/PageConfig'
import ContactEmail from '../../../components/ContactEmail'
import Flex from '../../../components/Flex'
import Markdown from '../../../components/Markdown'
import Heading from '../../../components/Heading'
import { getFormattedText } from '../../../utils/format'
import { getHeaderFromDate } from '../../../utils/format/dates'
import { PAGE_TITLES } from '../../../constants/pages'
import './style'

const Body = () => {
    const {
            pageName,
            title,
            date,
            body,
            showContactEmail,
        } = useContext(PageConfigContext),
        formattedTitle = getFormattedText(title || PAGE_TITLES[pageName]),
        headerFromDate = getHeaderFromDate(date)

    return (
        <Flex
            {...{
                className: cx(
                    'Body',
                    'fontSize__md',
                ),
                alignItems: 'start',
                flexDirection: 'column',
                flexGrow: 1,
                gap: 'md',
            }}
        >
            {(formattedTitle || headerFromDate) && (
                <Flex
                    {...{
                        flexDirection: 'column',
                        alignItems: 'normal',
                        gap: 'sm',
                    }}
                >
                    {formattedTitle && (
                        <Markdown>
                            {`# ${formattedTitle}`}
                        </Markdown>
                    )}
                    <Heading {...{ level: 5 }}>
                        {headerFromDate}
                    </Heading>
                </Flex>
            )}
            {body && (
                (Array.isArray(body) ? body : [body])
                    .map((child, index) => (
                        typeof child === 'string' ? (
                            <Markdown {...{ key: index }}>
                                {child}
                            </Markdown>
                        ) : <Fragment {...{ key: index }}>
                            {child}
                        </Fragment>
                    ))
            )}
            {showContactEmail && (
                <ContactEmail />
            )}
        </Flex>
    )
}

export default Body
