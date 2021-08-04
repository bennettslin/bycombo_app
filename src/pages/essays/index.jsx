import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import Essays2021 from './2021'

const Essays = () => (
    <Page>
        <Body {...{ title: 'Essays' }}>
            <Essays2021 />
        </Body>
    </Page>
)
export default Essays
