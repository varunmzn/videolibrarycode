/* All actions related to searching , updating and listing videos  */

import { LIST_VIDEO, UPDATE_ADD_TO_LIBRARY } from "../constants/actionTypes";

export const onSearchClick = payload => ({
    type: LIST_VIDEO,
    payload
})

export const onUpdateAddToLibrary = payload => ({
    type: UPDATE_ADD_TO_LIBRARY,
    payload
})
