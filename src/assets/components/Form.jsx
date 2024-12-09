import React, { useState } from 'react'
import { useEffect } from 'react';

const Form = (props) => {
   
   const [formData,setFormData] = useState(
    {searchterm:"",}
   )  
const handleChange = (e)=> {
    e.preventDefault();
    setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit =(e)=> {
   e.preventDefault();
   props.moviesSearch(formData.searchterm)
}



  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="searchterm" id="" />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Form