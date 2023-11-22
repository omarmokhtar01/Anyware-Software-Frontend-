import React, { useState ,useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../redux/actions/authAction';
import notify from '../useNotification';
import { useNavigate } from 'react-router-dom';


const LoginHook = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate(); 

   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setloading] = useState(true)
   

    const onChangeEmail = (e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    }
    
    const onChangePassword = (e) =>{
        e.preventDefault();
        setPassword(e.target.value)
    }

    //to save data
    const onSubmit = async () =>{
     
        setloading(true)
      await  dispatch(loginUser({
        email ,
        password,
      }))
      setloading(false)
    
    }


//to get state from redux
const res = useSelector(state => state.authReducer.loginUser)

useEffect(() => { 
    if(loading === false){
        if(res){
            console.log(res)
            console.log(res.data)
            if (res.data.token) {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userName", res.data.data.name)
                localStorage.setItem("userId", JSON.stringify(res.data.data.id))
                localStorage.setItem("role", res.data.data.role)
                setTimeout(() => {
                    window.location.href = "/"
                }, 1500); 
            } else {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                localStorage.removeItem("role")
            }

            if (res.data.message === "Incorrect email or password") {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                localStorage.removeItem("role")
                notify("Incorrect email or password", "error")
            }

            if(res.status === 200){
                notify(" login Successfully", "success")
                setTimeout(() => {
                    navigate("/")
                }, 1500);

            }
           
            setloading(true)
         }
        
    }

}, [loading])

 


    return [email , password ,loading , onChangeEmail , onChangePassword ,onSubmit  ]
}


export default LoginHook;