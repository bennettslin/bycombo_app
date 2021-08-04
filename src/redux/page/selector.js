import { PAGE_STORE } from '../../constants/store'

export const mapSelectedPage = (
    { [PAGE_STORE]: { selectedPage } },
) => selectedPage
