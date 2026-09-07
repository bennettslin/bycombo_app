import { getWindow } from '../../../utils/browser'

const
    SHADOW_CLASSNAME = 'Header__shadow',
    BUFFER_HEIGHT = 10,

    /**
     * FIXME: Hard-coding for now, in the interest of time. Don't get header
     * height from element itself because it isn't set upon mount.
     *
     * Header height.
     */
    XS_BREAKPOINT_DEFAULT_HEIGHT = 78,
    SM_BREAKPOINT_DEFAULT_HEIGHT = 115,
    MD_BREAKPOINT_DEFAULT_HEIGHT = 156,
    XS_BREAKPOINT_BACK_LINK_HEIGHT = 40,
    SM_BREAKPOINT_BACK_LINK_HEIGHT = 48,
    MD_BREAKPOINT_BACK_LINK_HEIGHT = 60,
    SM_BREAKPOINT_WIDTH = 633.536,
    MD_BREAKPOINT_WIDTH = 800

export const getHeaderHeight = (doShowBackLink) => {
    const windowWidth = getWindow().innerWidth

    if (windowWidth >= MD_BREAKPOINT_WIDTH) {
        return doShowBackLink ?
            MD_BREAKPOINT_BACK_LINK_HEIGHT :
            MD_BREAKPOINT_DEFAULT_HEIGHT
    } else if (windowWidth >= SM_BREAKPOINT_WIDTH) {
        return doShowBackLink ?
            SM_BREAKPOINT_BACK_LINK_HEIGHT :
            SM_BREAKPOINT_DEFAULT_HEIGHT
    }

    return doShowBackLink ?
        XS_BREAKPOINT_BACK_LINK_HEIGHT :
        XS_BREAKPOINT_DEFAULT_HEIGHT
}

export const setHeaderStyle = (
    { current: headerElement },
    { isFixedPosition, styledTop },
) => {
    headerElement.style.position = isFixedPosition ? 'fixed' : 'absolute'
    headerElement.style.top = `${styledTop}px`
}

export const setClassName = (
    { current: headerElement },
    { absoluteTop },
    doShowBackLink,
) => {
    // Always show shadow with back link.
    if (doShowBackLink) {
        headerElement.classList.add(SHADOW_CLASSNAME)
        return
    }

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
        previousScrollY,
    } = headerMode

    // The page has just loaded.
    if (isNaN(previousScrollY)) {
        if (currentScrollY >= headerHeight) {
            return setFixedHidden(headerMode, headerHeight)
        } else if (currentScrollY <= BUFFER_HEIGHT) {
            return setFixedVisible(headerMode)
        } else {
            return setAbsolute(headerMode, 0)
        }

        // It's scrolling down.
    } else if (currentScrollY > previousScrollY) {
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

export const setHeaderMode = (headerMode, doShowBackLink) => {
    const
        headerHeight = getHeaderHeight(doShowBackLink),
        currentScrollY = getWindow().scrollY

    return {
        ...setHeaderPosition(headerMode, headerHeight, currentScrollY),
        previousScrollY: currentScrollY,
    }
}
