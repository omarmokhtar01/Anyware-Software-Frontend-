import { useInsertData } from '../../hooks/useInsertData';

import { useGetData } from '../../hooks/useGetData';
import {  CREATE_QUIZ, GET_ALL_QUIZ, GET_ERROR } from '../type';


//get all Quiz
export const getAllQuiz = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/quiz/get-all`);

        dispatch({
            type: GET_ALL_QUIZ,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
} 

//create Quiz
export const createQuiz = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/quiz/create-quiz` , data);

        dispatch({
            type: CREATE_QUIZ,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
} 