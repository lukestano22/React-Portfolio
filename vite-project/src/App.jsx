import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import components from '../src/components'
import './App.css'

function App() {
  return (
    <>
    <div className='wrapper'>
      <div className='header'>
        <ul>
          if('/AboutMe'=== AboutMe){
            content = <li><AboutMe/></li>
          } else if('/Portfolio' === Portfolio){
            content = <li><Portfolio/></li>
          } else if('/Contact' === Contact){
            content = <li><Contact/></li>
          } else{
            content = <li><Resume/></li>
          }
        </ul>
      </div>
      <div className='content'>

      </div>
      <div className='footer'>

      </div>
    </div>
    </>
  )
}

export default App
