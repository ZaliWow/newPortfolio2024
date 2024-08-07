import "./index.css"
import { Navbar } from "./components/globals/navbar"
import { TitleWeb } from "./components/globals/TitleWeb"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Footer } from "./components/globals/Footer"
import { Achievements } from "./pages/Achievements"
import { Projects } from "./pages/Projects"
import { About } from "./pages/About"
import { Contact } from "./components/globals/Contact"
import { Charging } from "./components/globals/Charging"
import { Studies } from "./pages/Studies"
import { Questions } from "./pages/Questions"
function App() {
 



  return (
  <>
  <TitleWeb></TitleWeb>
  <Navbar></Navbar>
  <Charging></Charging>

  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/achievements" element={<Achievements></Achievements>}></Route>
    <Route path="/projects" element={ <Projects></Projects>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/studies" element={<Studies></Studies>}></Route>
    <Route path="/questions" element={<Questions></Questions>}></Route>
   
  </Routes>
  <Contact></Contact>
  <Footer></Footer>
  </>
  )
}

export default App
