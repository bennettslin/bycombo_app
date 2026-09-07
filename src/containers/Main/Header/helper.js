import { getWindow } from '../../../utils/browser'

const
    SHADOW_CLASSNAME = 'HeaderFrame__shadow',
    BUFFER_HEIGHT = 10,

    /**
     * FIXME: Hard-coding for now, in the interest of time. Don't get header
     * height from element itself because it'll vary upon mount.
     *
     * Computed height, plus variable top padding and constant bottom padding.
     */
    XS_BREAKPOINT_HEIGHT = 78,
    SM_BREAKPOINT_HEIGHT = 115,
    MD_BREAKPOINT_HEIGHT = 156,
    SM_BREAKPOINT_WIDTH = 633.536,
    MD_BREAKPOINT_WIDTH = 800

export const getHeaderHeight = () => {
    const windowWidth = getWindow().innerWidth

    if (windowWidth >= MD_BREAKPOINT_WIDTH) {
        return MD_BREAKPOINT_HEIGHT
    } else if (windowWidth >= SM_BREAKPOINT_WIDTH) {
        return SM_BREAKPOINT_HEIGHT
    }

    return XS_BREAKPOINT_HEIGHT
}

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

const setFixedHidden = (headerMode, headerHeight) => ({
    ...headerMode,
    isFixedPosition: true,
    isFixedVisible: false,
    styledTop: -headerHeight,
})

const setFixedVisible = headerMode => ({
    ...headerMode,
    isFixedPosition: true,
    isFixedVisible: true,
    styledTop: 0,
})

const setAbsolute = (headerMode, absoluteTop) => ({
    ...headerMode,
    isFixedPosition: false,
    styledTop: absoluteTop,
    absoluteTop,
})

const setHeaderPosition = (headerMode, headerHeight, currentScrollY) => {
    const {
        isFixedPosition,
        isFixedVisible,
        absoluteTop,
        lastScrollY,
    } = headerMode

    // The page has just loaded.
    if (isNaN(lastScrollY)) {
        if (currentScrollY >= headerHeight) {
            return setFixedHidden(headerMode, headerHeight)
        } else if (currentScrollY <= BUFFER_HEIGHT) {
            return setFixedVisible(headerMode)
        } else {
            return setAbsolute(headerMode, 0)
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

export const setHeaderMode = headerMode => {
    const
        headerHeight = getHeaderHeight(),
        currentScrollY = getWindow().scrollY

    return {
        ...setHeaderPosition(headerMode, headerHeight, currentScrollY),
        lastScrollY: currentScrollY,
    }
}
