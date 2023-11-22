import {combineReducers} from 'redux'
import authReducer from './authReducer'
import announcementReducer from './announcementReducer'
import quizReducer from './quizReducer'


export default combineReducers ({
    authReducer :authReducer ,
    announcementReducer : announcementReducer,
    quizReducer:quizReducer
})