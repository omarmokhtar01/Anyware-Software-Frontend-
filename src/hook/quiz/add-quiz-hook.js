import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { createQuiz } from '../../redux/actions/quizAction';
import notify from '../useNotification';
import { useNavigate } from 'react-router-dom';



const  AddQuiztHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [title, setTitle] = useState('')
    const [topic, setTopic] = useState('')
    const [dueTo, setDueTo] = useState('')
    const [loading, setLoading] = useState(true)
  

    //to change title
    const onChangeTitle = (event) => {
        event.persist();
        setTitle(event.target.value)
    }

     //to change topic
     const onChangeTopic = (event) => {
        event.persist();
        setTopic(event.target.value)
    }

 //to change dueto
 const onChangeDueTo = (event) => {
    event.persist();
    setDueTo(event.target.value)
}

    const res = useSelector(state => state.quizReducer.createQuiz)



   let userID = JSON.parse(localStorage.getItem("userId"));
   console.log(userID)
  
    //اما ادوس علي زرار حفظ التعديلات 
 const onSubmit  = async(e)=>{
  
//عشان اما اضيف يظهرلي الي  ضيفتو 
   await dispatch(createQuiz({

    title,
    topic,
    dueTo,
    userId:userID
   }))
    setLoading(false) //اما يخلص تحميل البيانات
}

 
useEffect(() => {
    if(loading === false){
        if(res){
            console.log(res)
            if(res.status === 201){
                notify(" Add Quiz Successfully", "success")

                
                setTimeout(() => {
                    navigate("/")
                }, 1500);

            }
          
        }
    }

}, [loading])

 




    return [title, loading, onSubmit, onChangeTitle ,topic , onChangeTopic , dueTo ,onChangeDueTo  ]
};

export default AddQuiztHook