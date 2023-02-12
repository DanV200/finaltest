import React, { useContext } from 'react';
import { useState,useEffect, } from 'react';
import { UserContext } from './context';
import { useNavigate } from "react-router-dom";

import axios from "axios"
const Login = () => {
   const{user,setUser,}=useContext(UserContext)
   const navigate = useNavigate();
    const login=async ()=>{
      
        const {data}=await axios.post('http://localhost:4000/users/signin')
        setUser(data)
        console.log(data)
    
    
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        login()
        navigate("/")
    }
    return (
        <div>
        <form onSubmit={(e) => {
            handleSubmit(e);

          }}>

            <input 
            required 
            placeholder='הכנס שם'
             onChange={(e) => setUser({ ...user, name: e.target.value })}>
            
                 </input>

                 <input
              
              id="password"
              placeholder='הכנס סיסמא'
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
                 <input
              id="password"
              placeholder='הכנס id'
              onChange={(e) => setUser({ ...user, id: e.target.value })}
            />
            <button type='submit'>כניסה</button>
        </form>
        </div>
    );
}

export default Login;
