import { CREATE_ANNOUNCEMENT, GET_ALL_ANNOUNCEMENT } from "../type";



const inital = {
  annoucement: [],
  annoucementCreate: [],
   loading: true,
} 
const announcementReducer = (state = inital, action) => {
   switch (action.type) {
    case GET_ALL_ANNOUNCEMENT:
        return {
            ...state,
            annoucement: action.payload,
            loading: false,
        }
        case CREATE_ANNOUNCEMENT:
            return {
                ...state,
                annoucementCreate: action.payload,
                loading: false
            }
       default:
           return state; 
   } 
}
export default announcementReducer