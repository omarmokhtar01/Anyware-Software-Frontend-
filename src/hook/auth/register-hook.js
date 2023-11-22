import React, { useState ,useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from 'react-redux'
import { createNewUser } from './../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotification';


const RegisterHook = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    //when first load
    useEffect(() => {
        dispatch(createNewUser());
    }, [])

 


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setconfirmPassword] = useState('')
    const [loading, setloading] = useState(true)


    const onChangeName = (e) =>{
        e.preventDefault();
        //console.log(e.target.value)
        setName(e.target.value)

    }

    const onChangeEmail = (e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    }


    const onChangePassword = (e) =>{
        e.preventDefault();
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e) =>{
        e.preventDefault();
        setconfirmPassword(e.target.value)
    }

   //save data
   const OnSubmit = async () =>{
    // validationValues();
    setloading(true)

    await dispatch(createNewUser({
        name,
       email,
       password,
       confirmedPassword:confirmedPassword,
      
    })); 
    setloading(false)
} 

useEffect(() => {
    if(loading === false){
        if(res){
            console.log(res)
            if(res.status === 201){
                notify(" create Account Successfully", "success")
                setTimeout(() => {
                    navigate("/login")
                }, 1500);

            }
          
        }
    }

}, [loading])
 

 //to get state from redux
 
 const res = useSelector(state => state.authReducer.createUser)



    return [name ,email  , password ,confirmedPassword , loading , onChangeName , 
        onChangeEmail  , onChangePassword , onChangeConfirmPassword , OnSubmit ]
}



export default RegisterHook;