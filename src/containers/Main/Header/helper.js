const
    SHADOW_CLASSNAME = 'HeaderFrame__shadow',
    BUFFER_HEIGHT = 10

export const setShadowClassName = ({
    headerRef,
    currentScrollY,
    absoluteTop,
}) => {
    const { current: headerElement } = headerRef

    if (
        currentScrollY < BUFFER_HEIGHT ||
        absoluteTop < BUFFER_HEIGHT
    ) {
        headerElement.classList.remove(SHADOW_CLASSNAME)
    } else {
        headerElement.classList.add(SHADOW_CLASSNAME)
    }
}

// const setFixedHidden = headerHeight => {
//     console.log('set fixed hidden')
//     isFixedPosition = true
//     isFixedVisible = false
//     styledTop = -headerHeight
// }

// const setFixedVisible = () => {
//     console.log('set fixed visible')
//     isFixedPosition = true
//     isFixedVisible = true
//     styledTop = 0
// }

// const setAbsolute = absoluteTop => {
//     console.log('set absolute')
//     isFixedPosition = false
//     styledTop = absoluteTop
// }

// export const setHeaderMode = ({
//     headerRef,
// }) => {

// }
