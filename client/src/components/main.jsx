import React from 'react';
import './style.css'
import { useState,useContext } from 'react';
import { UserContext } from './context';
const Main = () => {
    const {user,setUser}=useContext(UserContext)
    
    const calculate=async ()=>{
       budget=  income-outcome
       setBudget(budget)
    }
const [income, setIncome] = useState({});
const [outcome, setOutcome] = useState({});
const [budget, setBudget] = useState();
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(income)
    console.log(outcome)
    calculate()
}
    return (
        <div>
            <form onSubmit={(e) => {
            handleSubmit(e);

          }}>
                <input type="text" 
                placeholder='income'
                name='income'
                onChange={(e) => setIncome({ income: e.target.value })}/>
                <input type="text" 
                placeholder='outcome'
                name='outcome'
                onChange={(e) => setOutcome({ outcome: e.target.value })}/>
                <button type='submit'>calculate balance  </button>
                <label className='balance'> your balance is:{budget}</label>
                
                </form>
        </div>
    );
}

export default Main;
