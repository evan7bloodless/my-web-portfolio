import { useState } from 'react'
import './App.css'
import { CaseIcon, EmailIcon, HomeIcon, UserIcon } from './components/Icons.tsx'
import { Home, About, ProjectList, Contacts } from './components/Pages.tsx'
import { RealTimeClock } from './components/Clock.tsx'

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <div className='all'>
        <div className='upside'>
          <aside className='--background'>
            <nav>
              <button className='btn--panel' onClick={() => setPage('home')}><HomeIcon size={24} /></button>
              <button className='btn--panel' onClick={() => setPage('about')}><UserIcon size={24} /></button>
              <button className='btn--panel' onClick={() => setPage('project-list')}><CaseIcon size={24} /></button>
              <button className='btn--panel' onClick={() => setPage('contacts')}><EmailIcon size={24} /></button>
            </nav>
          </aside>
          <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'project-list' && <ProjectList />}
            {page === 'contacts' && <Contacts />}
          </main>
        </div>
        <footer className='--background'>
          <p>Based in Odessa</p>
          <p>Local time <RealTimeClock timeZone="Europe/Kyiv" /></p>
        </footer>
      </div>
    </>
  )
}

export default App
