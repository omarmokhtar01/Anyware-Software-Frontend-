import { useInsertData } from '../../hooks/useInsertData';

import { useGetData } from '../../hooks/useGetData';
import { CREATE_ANNOUNCEMENT, GET_ALL_ANNOUNCEMENT, GET_ERROR } from '../type';


//get all Announcement
export const getAllAnnouncement = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/announcement/get-announcement`);

        dispatch({
            type: GET_ALL_ANNOUNCEMENT,
            payload: response,
        })

    } catch (e) { 
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
} 

export const createAnnouncement = (data) => async (dispatch) => {
    try {
        const response = await useInsertData("/api/v1/announcement/create-announcement", data);
        dispatch({
            type: CREATE_ANNOUNCEMENT,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error  " + e,
        })
    }
}