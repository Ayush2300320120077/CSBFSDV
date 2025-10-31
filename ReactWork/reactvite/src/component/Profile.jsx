import React from 'react'
import './Profile.css'
import Gallery from './Gallery'

function Profile({data}) {
  return (
    <div className="parent">
      <img src="https://cdn.openart.ai/assets/internal/uploads/image_Dbdj01FP_656x724_1753248032862.webp" alt="" className='hello' />

    <h2>Profile Page</h2>
    <h2>Name: {data.myname}</h2>
    <h2>Branch: {data.branch}</h2>
    <h2>Section: {data.section}</h2>
    <h2>College: {data.college}</h2>
    <h1 style={{color: 'red' , border: "2px solid red",backgroundColor: 'blue'}}>Account Created</h1>
    
    </div>
  
  )
}

export default Profile


