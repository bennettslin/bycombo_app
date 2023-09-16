import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import Flex from '../../../components/Flex'
import MailingList from '../../../components/MailingList'
// import FollowButtons from '../../../components/FollowButtons'
import StyledFrame from '../StyledFrame'
import { mapIsUpsellShown } from '../../../redux/option/selector'
import './style'

const MainFooter = () => {
    const
        isUpsellShown = useSelector(mapIsUpsellShown),
        [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setTimeout(() => setDidMount(true), 0)
    }, [])

    return (
        <CSSTransition
            appear
            {...{
                in: didMount && !isUpsellShown,
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
                        // justifyContent: 'spaceBetween',
                        gap: 'sm',
                    }}
                >

                    <MailingList />
                    {/* <FollowButtons /> */}
                </Flex>
            </StyledFrame>
        </CSSTransition>
    )
}

export default MainFooter
