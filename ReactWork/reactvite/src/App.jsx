// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import Profile from './component/profile'
import StateHandling from './component/StateHandling'

function App() {
  return (
    <div className='container'>
      <h2>welcome to react vite</h2>
      <h3 style={{backgroundColor: 'cyan',color: 'brown'}}>
        {/* <Gallery/> */}
        <StateHandling/>
      </h3>
      
    </div>
  )
}

export default App
