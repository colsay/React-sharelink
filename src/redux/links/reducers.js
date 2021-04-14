import axios from "axios";
import {
    ADD_LINK, DELETE_LINK, LOAD_LINK_SUCCESS_ACTION,
    LOAD_LINK_FAILURE_ACTION, loadLinkThunk
} from "./actions";

const initialState = {
    links: []
}
const why = () => {
    console.log(initialState.links, 'this might be why')
}

// loadLinkThunk
//     .then((result) => {
//         console.log("hello ", result)
//         return result.length ? { links: result } : { links: [] }
//     })


// const loadLink = () => {
//     axios.get('http://localhost:8000')
//         .then(res => {
//             console.log(res, 'hello')
//             initialState = { links: res.data };
//         });
// }

export function shareLinkReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LINK:
            return {
                links: state.links.concat([action.payload]),
            };
        case DELETE_LINK:
            return {
                links: state.links.filter((link) => link.id !== action.payload.id),
            };
        case LOAD_LINK_SUCCESS_ACTION:
            return {
                links: state.links.concat([...action.payload])
            };
        case LOAD_LINK_FAILURE_ACTION:
            return {
                links: []
            };
        default:
            return state;
    }

}
why();