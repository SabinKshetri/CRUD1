import axios from 'axios'
import "../App.scss"
import React, { useEffect, useState } from 'react'

const ReadData = () => {
    const [userdata,GetUserData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            GetUserData(response.data)
            console.log(response)
        })
    },[])
  return (
   <>
   <div className='read_data'>
   <h1>Get Api</h1>
   {userdata.map((a)=>{
        return(
            <div className='list'><h3>{a.name}</h3></div>
        )
   })}
   </div>
   </>
  )
}

export default ReadData