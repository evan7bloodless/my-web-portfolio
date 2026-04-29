import './Pages.css'

export function Home() {
  return (
    <>
      <div>
        <p>HOME</p>
        <h1>Hi, I'm Evan, a<br/><span className='highlight'>software</span> developer</h1>
        <p>bla bla bla</p>
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
        <h1>About</h1>
        <p>about about about</p>
      </div>
    </>
  )
}
export function ProjectList() {
  return (
    <>
      <div>
        <p>PROJECT-LIST</p>
        <h1>Project-List</h1>
        <p>project-list project-list project-list</p>
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
        <p>contacts contacts contacts</p>
      </div>
    </>
  )
}