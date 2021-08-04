import React from 'react'
import cx from 'classnames'
import Anchor from '../../components/Anchor'
import Image from '../Image'
import albumLink from '../../assets/images/albumLink.png'
import './style'
import { replaceStraightWithSmartQuotes } from '../../utils/format/smartQuote'

const AlbumLink = () => (
    <Anchor
        {...{
            className: cx(
                'AlbumLink',
            ),
            gaLabel: 'AlbumLink',
            href: 'https://www.yearlingsbobtail.com',
        }}
    >
        <Image
            {...{
                className: cx(
                    'AlbumLink__image'
                ),
                src: albumLink,
            }}
        />
        <div
            {...{
                className: cx(
                    'AlbumLink__caption'
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        'AlbumLink__newWebcomic'
                    ),
                }}
            >
                our new audio webcomic
            </div>
            <div
                {...{
                    className: cx(
                        'AlbumLink__yearlingsBobtail',
                        'Birra'
                    ),
                }}
            >
                <em>{replaceStraightWithSmartQuotes(`Yearling's Bobtail`)}</em>
            </div>
        </div>
    </Anchor>
)

export default AlbumLink
