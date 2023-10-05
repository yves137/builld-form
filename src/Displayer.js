import { useState } from 'react'
import { CustomButtons } from './CustomButtons'

export function Displayer(){
   
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");

    function handleClick(){
        if(firstName.trim().length && lastName.trim().length>0){
            alert(`Hello ${firstName} ${lastName}!`)
            setFirstName('')
            setLastName('')
        }
    }
   
    return <div className='flex flex-col items-center space-y-5'>
            <input type='text' value={ firstName } placeholder='Fisrt name'  className='text-black text-xl border py-5 px-10 rounded-md' onChange={(event)=>setFirstName(event.target.value)}/>
            <input type='text' value={ lastName } placeholder='Last name'  className='text-black text-xl border py-5 px-10 rounded-md' onChange={(event)=>setLastName(event.target.value)}/>
            <CustomButtons handleClick={handleClick} />
        </div>
}