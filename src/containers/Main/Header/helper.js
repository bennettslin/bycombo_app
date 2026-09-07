import { getWindow } from '../../../utils/browser'

const
    SHADOW_CLASSNAME = 'HeaderFrame__shadow',
    BUFFER_HEIGHT = 10

export const setHeaderStyle = (
    { current: headerElement },
    { isFixedPosition, styledTop },
) => {
    headerElement.style.position = isFixedPosition ? 'fixed' : 'absolute'
    headerElement.style.top = `${styledTop}px`
}

export const setShadowClassName = (
    { current: headerElement },
    { absoluteTop },
) => {
    if (
        getWindow().scrollY < BUFFER_HEIGHT ||
        absoluteTop < BUFFER_HEIGHT
    ) {
        headerElement.classList.remove(SHADOW_CLASSNAME)
    } else {
        headerElement.classList.add(SHADOW_CLASSNAME)
    }
}

const setFixedHidden = (headerMode, headerHeight) => {
    console.log('set fixed hidden')
    return {
        ...headerMode,
        isFixedPosition: true,
        isFixedVisible: false,
        styledTop: -headerHeight,
    }
}

const setFixedVisible = headerMode => {
    console.log('set fixed visible')
    return {
        ...headerMode,
        isFixedPosition: true,
        isFixedVisible: true,
        styledTop: 0,
    }
}

const setAbsolute = (headerMode, absoluteTop) => {
    console.log('set absolute')
    return {
        ...headerMode,
        isFixedPosition: false,
        styledTop: absoluteTop,
        absoluteTop,
    }
}

const setHeaderPosition = (headerMode, headerHeight) => {
    const
        {
            isFixedPosition,
            isFixedVisible,
            absoluteTop,
            lastScrollY,
        } = headerMode,
        currentScrollY = getWindow().scrollY

    console.log('effect is called', isNaN(lastScrollY))

    // The page has just loaded.
    if (isNaN(lastScrollY)) {
        if (currentScrollY >= headerHeight) {
            return setFixedHidden(headerMode, headerHeight)
        } else if (currentScrollY <= 1) {
            return setFixedVisible(headerMode)
        } else {
            return setAbsolute(headerMode, currentScrollY - headerHeight)
        }

        // It's scrolling down.
    } else if (currentScrollY > lastScrollY) {
        if (isFixedPosition && isFixedVisible) {
            // Lock at current scroll position.
            return setAbsolute(headerMode, currentScrollY)
        } else if (!isFixedPosition) {
            // Check if header has scrolled entirely out of view.
            if (currentScrollY >= absoluteTop + headerHeight) {
                return setFixedHidden(headerMode, headerHeight)
            }
        }
        // It's scrolling up.
    } else {
        if (isFixedPosition && !isFixedVisible) {
            // Lock just above current viewport.
            return setAbsolute(headerMode, currentScrollY - headerHeight)
        } else if (!isFixedPosition) {
            // Check if header has scrolled entirely into view.
            if (currentScrollY <= absoluteTop) {
                return setFixedVisible(headerMode)
            }
        }
    }

    return headerMode
}

export const setHeaderMode = (headerMode, headerHeight) => ({
    ...setHeaderPosition(headerMode, headerHeight),
    lastScrollY: getWindow().scrollY,
})
