import axios from 'axios'

export const ADD_LINK = "ADD_LINK";
export const DELETE_LINK = "DELETE_LINK";
export const LOAD_LINK_SUCCESS_ACTION = 'LOAD_LINK_SUCCESS_ACTION';
export const LOAD_LINK_FAILURE_ACTION = 'LOAD_LINK_FAILURE_ACTION';

// Action Creators

export function AddLink(item) {
    let links
    axios({
        method: "post",
        url: "http://localhost:8000/",
        data: item,
    })
        .then(function (response) {
            console.log(response.data, 'succeeded');
            links = response.data

        })
        .catch(function (response) {
            console.log("sorry form post failed");
        });
    return {
        type: ADD_LINK,
        payload: links,
    };
}

export function DeleteLink(item) {
    let links
    axios({
        method: "delete",
        url: "http://localhost:8000/",
        data: item,
    })
        .then(function (response) {
            console.log(response.data, 'succeeded');
            links = response.data
        })
        // .then(() => {
        //     return {
        //         type: DELETE_LINK,
        //         payload: item,
        //     }
        // })
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
            })
            .catch((error) => {
                console.log("FAILURE ", error);
                dispatch(loadLinkFailureActionCreator());
            });
    };
}