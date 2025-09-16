import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import Flex from '../../../components/Flex'
import MailingList from '../../../components/MailingList'
import StyledFrame from '../StyledFrame'
import './style'

const MainFooter = () => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setTimeout(() => setDidMount(true), 0)
    }, [])

    return (
        <CSSTransition
            appear
            {...{
                in: didMount,
                timeout: 200,
                classNames: {
                    enterDone: 'shown',
                },
            }}
        >
            <StyledFrame
                {...{
                    className: cx(
                        'hidden',
                    ),
                }}
            >
                <Flex
                    {...{
                        className: cx(
                            'MainFooter',
                        ),
                        gap: 'sm',
                    }}
                >

                    <MailingList isWide />
                </Flex>
            </StyledFrame>
        </CSSTransition>
    )
}

export default MainFooter
