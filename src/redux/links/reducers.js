
import {
    ADD_LINK, DELETE_LINK, LOAD_LINK_SUCCESS_ACTION,
    LOAD_LINK_FAILURE_ACTION,
} from "./actions";

export const initialState = {
    links: []
}

export function shareLinkReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LINK:
            return {
                links: action.payload,
            };
        case DELETE_LINK:
            return {
                links: state.links.filter((link) => link.id !== action.payload.id),
            };
        case LOAD_LINK_SUCCESS_ACTION:
            return {
                links: action.payload
            };
        case LOAD_LINK_FAILURE_ACTION:
            return {
                links: []
            };
        default:
            return state;
    }

}
