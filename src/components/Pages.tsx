import './Pages.css'

export function Home() {
  return (
    <>
      <div>
        <p>HOME</p>
        <h1>Hi, I'm Evan, a<br/><span className='highlight-upper'>software</span> developer</h1>
      </div>
      <div className="soundwave-container">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </>
  )
}
export function About() {
  return (
    <>
      <div>
        <p>ABOUT</p>
        <h1>Specializing in <span className='highlight'>front-end</span> development <br/>
        and <span className='highlight'>systems programming</span>.</h1>
        <p>Frontend Developer specializing in React, TypeScript, and Vite. I focus on building user interfaces<br/> 
        and business logic for web applications. I have experience with Python (FastAPI, Django) <br/>
        and system programming in Rust. I am also learning game development using the Godot 4 engine (C#). <br/>
        I am constantly honing my skills, focusing on modern development standards and performance optimization.</p>
      </div>
    </>
  )
}
export function ProjectList() {
  return (
    <>
      <div>
        <p>PROJECT-LIST</p>
        <h1>Focused on <span className='highlight'>clean code</span>, <span className='highlight'>type safety</span>, <br />and <span className='highlight'>efficient performance</span>.</h1>
        <p><a href="https://github.com/evan7bloodless/my-web-portfolio" target="_blank" rel="noopener noreferrer">
          my-web-portfolio
        </a> (React, TypeScript, Vite) — Personal portfolio built with React, TypeScript, and Vite.<br/>
        <a href="https://github.com/evan7bloodless/file-converter" target="_blank" rel="noopener noreferrer">
          file-converter
        </a> (Python) — A Python-based tool for fast and efficient file conversion.<br/>
        <a href="https://github.com/evan7bloodless/dencity-marching-cubes" target="_blank" rel="noopener noreferrer">
          dencity-marching-cubes
        </a> (Bevy, Rust) — Procedural terrain generation using Density Grids and Marching Cubes in Rust with Bevy Engine.</p>
      </div>
    </>
  )
}
export function Contacts() {
  return (
    <>
      <div>
        <p>CONTACTS</p>
        <h1>Contacts</h1>
        <p><a href="https://github.com/evan7bloodless" target="_blank" rel="noopener noreferrer">
          GitHub
        </a><br /><br />
        <a href="https://www.linkedin.com/in/evan-bloodless-089469408/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a><br /><br />
        Email: [evan7bloodless@gmail.com]<br /><br />
        Telegram: [@evanioisgood]</p>
      </div>
    </>
  )
}