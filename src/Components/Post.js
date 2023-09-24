import axios from 'axios';
import React, { useState } from 'react'
import "../App.scss"

export default function Post() {
    const data={fame:'',lname:''};
    const [inputData,setInputData]=useState(data)

    const handleData=(e)=>{
setInputData({...inputData,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
            console.log(response)
        })
    }

    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response)
        })
    }

    const handleDelete =(e)=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
        })
    }

   

   
  return (
   <>
   <div className='post-method'>
   <h1>Post,PUT,DELETE Api Hit</h1>
   <label>First Name:</label>
   <input type='text' name='fname' value={inputData.fname} onChange={handleData}></input><br/><br/>
   <label>Last Name:</label>
   <input type='text' name='lname' value={inputData.lname} onChange={handleData}></input><br/>
   <button onClick={handleSubmit}>Submit</button>
   <button onClick={handleUpdate}>Update</button>
   <button onclick={handleDelete}>Delete</button>
   </div>
   </>
  )
}
