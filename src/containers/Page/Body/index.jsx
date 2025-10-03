import React, { Fragment, useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../contexts/PageConfig'
import ContactEmail from '../../../components/ContactEmail'
import Flex from '../../../components/Flex'
import Markdown from '../../../components/Markdown'
import Heading from '../../../components/Heading'
import { getFormattedText } from '../../../utils/format'
import { getHeaderFromDate } from '../../../utils/format/dates'
import './style'

const Body = () => {
    const {
            pageHeading,
            titleHeading,
            title,
            date,
            body,
            showContactEmail,
        } = useContext(PageConfigContext),
        formattedTitle = getFormattedText(pageHeading || titleHeading || title),
        headerFromDate = getHeaderFromDate(date)

    return (
        <div
            {...{
                className: cx(
                    'Body',
                ),
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
        </div>
    )
}

export default Body
