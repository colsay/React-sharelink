import axios from 'axios'
export const ADD_LINK = "ADD_LINK";
export const DELETE_LINK = "DELETE_LINK";
export const LOAD_LINK_SUCCESS_ACTION = 'LOAD_LINK_SUCCESS_ACTION';
export const LOAD_LINK_FAILURE_ACTION = 'LOAD_LINK_FAILURE_ACTION';
export const ADD_LINK_FAILURE = 'ADD_LINK_FAILURE'

export function AddLinksuccess(item) {
    return {
        type: ADD_LINK,
        payload: item,
    };
}
export function AddLinkfailure() {
    return {
        type: ADD_LINK_FAILURE
    }
}

export function AddLinkThunk(item) {
    return dispatch => {
        axios
            .post('http://localhost:8000/', item)
            .then(res => {
                console.log(res.data, 'this is res data')
                dispatch(AddLinksuccess(res.data))
            })
            .catch(err => {
                dispatch(AddLinkfailure(err.message))
            })
    }
}

export function DeleteLink(item) {
    axios({
        method: "delete",
        url: "http://localhost:8000/",
        data: item,
    })
        .then(function (response) {
            console.log(response.data, 'succeeded');
            // dispatch({ type: DELETE_LINK, payload: item })
        })
        .catch(function (response) {
            console.log("sorry form delete failed");
        });
    return {
        type: DELETE_LINK,
        payload: item,
    }
};


export function loadLinkSuccessActionCreator(links) {
    return {
        type: LOAD_LINK_SUCCESS_ACTION,
        payload: links,
    }
}

export function loadLinkFailureActionCreator() {
    return {
        type: LOAD_LINK_FAILURE_ACTION
    }
}

export function loadLinkThunk() {
    return (dispatch) => {
        return axios
            .get("http://localhost:8000")
            .then((response) => {
                console.log(response.data)
                let links = response.data;
                dispatch(loadLinkSuccessActionCreator(links))
                console.log()
            })
            .catch((error) => {
                console.log("FAILURE ", error);
                dispatch(loadLinkFailureActionCreator());
            });
    };
}