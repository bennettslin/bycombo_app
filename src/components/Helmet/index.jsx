import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Helmet as ReactHelmet } from 'react-helmet'
import PageConfigContext from '../../contexts/PageConfig'
import { mapSelectedPagePath } from '../../redux/page/selector'
import {
    getMetaTitle,
    getMetaTags,
} from './helper'

const Helmet = ({ metaTitle, metaDescription }) => {
    const
        {
            title,
            description,
        } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath)

    return (
        <ReactHelmet>
            <title>
                {getMetaTitle({
                    page: selectedPagePath,
                    title,
                })}
            </title>
            {getMetaTags({
                page: selectedPagePath,
                description: metaDescription || description,
                title: metaTitle || title,
            }).map(({
                name,
                property,
                content,
            }) => (
                <meta
                    {...{
                        key: name || property,
                        ...name && { name },
                        ...property && { property },
                        content,
                    }}
                />
            ))}
        </ReactHelmet>
    )
}

Helmet.propTypes = {
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
}

export default Helmet
