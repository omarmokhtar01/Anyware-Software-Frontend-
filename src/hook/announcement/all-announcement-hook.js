import React, { useState ,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllAnnouncement } from '../../redux/actions/announcementAction';


const AllAnnouncementHook = () => {

   
    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        dispatch(getAllAnnouncement());
    }, [])



 //to get state from redux
 
 const res = useSelector(state => state.announcementReducer.annoucement)
console.log(res)


    return [res] 
}



export default AllAnnouncementHook;