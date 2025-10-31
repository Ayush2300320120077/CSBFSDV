import React from 'react'
import Profile from './profile'

function Gallery() {

  const Student=[{
    myname: "ayush kumar",
    branch: "cs",
    section: "b",
    college: "abes engineering college"
  },
  {
    myname: "garv agrawal",
    branch: "cs",
    section: "b",
    college: "abes engineering college"
  },
  {
    myname: "garv singhal",
    branch: "cs",
    section: "b",
    college: "abes engineering college"
  },
  {
    myname: "Divyansh singhal",
    branch: "cs",
    section: "b",
    college: "abes engineering college"
  }
]
  return (
    <div className='card'>
      {/* <div><Profile name="Rahul kumar" branch="Cs" section ="B" college="Abes Engineering college"/></div>
      <div><Profile name="GARV kumar" branch="Cs" section ="B" college="Abes Engineering college"/></div>
      <div><Profile name="Divyansh kumar" branch="Cs" section ="B" college="Abes Engineering college"/></div> */}
      {/* <Profile data = {Student}/> */}
      {
        Student.map((ele,index)=>(
          <Profile data={ele} key={index}/>
        ))
      }
    </div>
    

  )
  
}

export default Gallery