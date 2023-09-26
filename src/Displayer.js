import { useState } from 'react'
import {CustomButtons} from './CustomButtons'

export function Displayer(){
   
    const[firstName,setFirstName]= useState("");
    const[lastName,setLastName]= useState("");

    function handleClick(){
        alert(`Hello ${firstName} ${lastName}!`)
        setFirstName('')
        setLastName('')
    }
   
    return <div className='flex flex-col items-center space-y-5'>
            <input type='text' value={firstName}  className='text-black text-xl border py-5 px-10 rounded-md' onChange={(e)=>setFirstName(v=>e.target.value)}/>
            <input type='text' value={lastName}  className='text-black text-xl border py-5 px-10 rounded-md' onChange={(e)=>setLastName(v=>e.target.value)}/>
            <CustomButtons handleClick={handleClick} />
        </div>
}