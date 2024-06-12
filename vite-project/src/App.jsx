import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css'
//use state for current tab
 const [Tab, setTab] = useState('AboutMe')
function App() {
  //content variable to store content from each component
  let content;
// conditional statements
  if(Tab === '/AboutMe'){
    content = <AboutMe/>
  } else if(Tab === '/Contact'){
    content = <Contact/>
  } else if(Tab === '/Portfolio'){
    content = <Portfolio/>
  } else{
    content = <Resume/>
  }
  return(<>
<div className='wrapper'>
      <div className='header'>
        <ul>
        <li><button onClick={()=> setTab('AboutMe')}>About Me</button></li>
        <li><button onClick={()=> setTab('Contact')}>Contact</button></li>
        <li><button onClick={()=> setTab('Portfolio')}>Portfolio</button></li>
        <li><button onClick={()=> setTab('Resume')}>Resume</button></li>
        </ul>
      </div>
      <div className='content'>
          
      </div>
      <div className='footer'>

      </div>
    </div>
  </>)
}

export default App
