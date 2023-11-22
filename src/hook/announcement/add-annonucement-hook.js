import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createAnnouncement } from '../../redux/actions/announcementAction'
import 'react-toastify/dist/ReactToastify.css';

import notify from '../useNotification';
import { useNavigate } from 'react-router-dom';


const AddAnnonucementHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(true)
  

    //to change name state
    const onChangeContent = (event) => {
        event.persist();
        setContent(event.target.value)
    }

     const res = useSelector(state => state.announcementReducer.annoucementCreate)



   let userID = JSON.parse(localStorage.getItem("userId"));
  
 const onSubmit  = async(e)=>{
  
   await dispatch(createAnnouncement({

        content ,
        userId:userID
   }))
    setLoading(false) 
}
 
useEffect(() => {
    if(loading === false){
        if(res){
            console.log(res)
            if(res.status === 201){
                notify(" Add Anncounment Successfully", "success")

                setContent("")
                setTimeout(() => {
                    navigate("/")
                }, 1500);

            }
          
        }
    }

}, [loading])

 




    return [content, loading, onSubmit, onChangeContent]
};

export default AddAnnonucementHook