import "./index.css"
import { Navbar } from "./components/globals/navbar"
import { TitleWeb } from "./components/globals/TitleWeb"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Footer } from "./components/globals/Footer"
import { Achievements } from "./pages/Achievements"

function App() {
 



  return (
  <>
  <TitleWeb></TitleWeb>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/achievements" element={<Achievements></Achievements>}></Route>
  </Routes>
  <Footer></Footer>
  </>
  )
}

export default App
