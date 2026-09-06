const
    SHADOW_CLASSNAME = 'HeaderFrame__shadow',
    BUFFER_HEIGHT = 10

export const setShadowClassName = ({
    element,
    currentScrollY,
    absoluteTop,
}) => {
    if (
        currentScrollY < BUFFER_HEIGHT ||
                absoluteTop < BUFFER_HEIGHT
    ) {
        element.classList.remove(SHADOW_CLASSNAME)
    } else {
        element.classList.add(SHADOW_CLASSNAME)
    }
}
