import {  CREATE_QUIZ, GET_ALL_QUIZ } from "../type";



const inital = {
  quiz: [],
  createQuiz:[],
   loading: true,
} 
const quizReducer = (state = inital, action) => {
   switch (action.type) {
    case GET_ALL_QUIZ:
        return {
            ...state,
            quiz: action.payload,
            loading: false,
        }
        case CREATE_QUIZ:
            return {
                ...state,
                createQuiz: action.payload,
                loading: false,
            }
       default:
           return state; 
   } 
}
export default quizReducer