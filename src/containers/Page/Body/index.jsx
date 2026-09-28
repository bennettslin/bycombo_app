import React, { Fragment, useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../contexts/PageConfig'
import Flex from '../../../components/Flex'
import Markdown from '../../../components/Markdown'
import Heading from '../../../components/Heading'
import { getFormattedText } from '../../../utils/format'
import { PAGE_TITLES } from '../../../constants/pages'
import './style'

const Body = () => {
    const {
            pageName,
            title,
            dateText,
            body,
        } = useContext(PageConfigContext),
        formattedTitle = getFormattedText(title || PAGE_TITLES[pageName])

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
            {(formattedTitle || dateText) && (
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
                        {dateText}
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
        </Flex>
    )
}

export default Body
