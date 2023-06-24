import { useState } from 'react'
import './App.css'
import Homepage from './components/homepage/homepage'
import Loginpage from './components/loginpage/loginpage'
import Registerpage from './components/registerpage/registerpage'

function App() {

  return (
    <>
      <div className="App">
      {/* <Homepage/> */}
      <Loginpage/>
      {/* <Registerpage/> */}
      </div>
    </>
  )
}

export default App
