import React, { useState ,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllQuiz } from '../../redux/actions/quizAction';


const AllQuizHook = () => {

   
    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        dispatch(getAllQuiz());
    }, [])



 //to get state from redux
 
 const res = useSelector(state => state.quizReducer.quiz)
console.log(res)


    return [res] 
}



export default AllQuizHook;