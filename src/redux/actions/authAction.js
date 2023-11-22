


import { useInsertData } from '../../hooks/useInsertData';
import { CREATE_NEW_USER, LOGIN_USER } from './../type';

 
  

//create new  user account
export const createNewUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/signup`, data);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })
  
    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}


//login user account
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/login`, data);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}



