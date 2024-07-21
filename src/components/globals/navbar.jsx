import { useNavigate } from "react-router-dom"
import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"

export function Navbar(params) {
  const navigate = useNavigate()

    return(
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a  onClick={() => navigate("/")}>HOME</a></li>
        <li><a onClick={() => navigate("/about")}>ABOUT</a></li>
        <li><a onClick={() => navigate("/achievements")}>ACHIEVEMENTS</a></li>
        <li>
          <a>SKILLS</a>
          <ul className="p-2">
            <li><a href="#ToolsSkills" onClick={() => navigate("/")}>SOFT SKILLS</a></li>
            <li><a href="#ToolsSkills" onClick={() => navigate("/")}>TECHNICAL SKILLS</a></li>
          </ul>
        </li>
        <li><a onClick={() => navigate("/projects")}>PROJECTS</a></li>
        <li><a>STUDIES</a></li>
        <li><a>CONTACT</a></li>
      </ul>
     
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="text-2xl" onClick={() => navigate("/")}>HOME</a></li>
      <li><a className="text-2xl" onClick={() => navigate("/about")}>ABOUT</a></li>
      <li><a className="text-2xl" onClick={() => navigate("/achievements")}>ACHIEVEMENTS</a></li>
      <li>
        <details>
          <summary className="text-2xl">SKILLS</summary>
          <ul className="p-2">
            <li><a className="text-2xl" href="#ToolsSkills" onClick={() => navigate("/")}>SOFT SKILLS</a></li>
            <li><a className="text-2xl" href="#ToolsSkills" onClick={() => navigate("/")}>TECHNICAL SKILLS</a></li>
          </ul>
        </details>
      </li>
      <li><a className="text-2xl" onClick={() => navigate("/projects")}>PROJECTS</a></li>
      <li><a className="text-2xl">STUDIES</a></li>
        <li><a className="text-2xl">CONTACT</a></li>
    </ul>
    
  </div>
  <div className="navbar-end">
  
 <LoginForm></LoginForm>
  <RegisterForm></RegisterForm>


  </div>
</div>
    )
    
}