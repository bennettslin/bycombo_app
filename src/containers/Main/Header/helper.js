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
