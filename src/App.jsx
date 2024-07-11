import { useState } from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  // Use state for current tab
  const [tab, setTab] = useState('AboutMe');

  // Conditional component rendering
  function renderTab() {
    switch (tab) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <Resume />;
    }
  }

  return (
    <div className='wrapper'>
      <header>
        <h1>Luke Stano</h1>
        <ul className='nav-list'>
          <li><button className='nav-button' onClick={() => setTab('AboutMe')}>About Me</button></li>
          <li><button className='nav-button' onClick={() => setTab('Contact')}>Contact</button></li>
          <li><button className='nav-button' onClick={() => setTab('Portfolio')}>Portfolio</button></li>
        </ul>
      </header>
      <div className='content'>
        {renderTab()}
      </div>
      <footer>
        <img className='footer-icon' width="50" height="50" src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='GitHub logo' />
        <img className='footer-icon' width="50" height="50" src='https://www.svgrepo.com/show/922/linkedin.svg' alt='LinkedIn logo' />
      </footer>
    </div>
  );
}

export default App;
