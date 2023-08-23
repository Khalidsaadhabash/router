import {Routes,Route} from "react-router-dom"
import { Nav } from "./Companits/Nav"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { BootCamp } from "./pages/BootCamp"
import './App.css'
import { Notfound } from "./pages/Notfound"


function App() {

  return (
    <>
    <Nav />
      <Routes>
      <Route path="/Home" element={<Home/>} />
    <Route path=":id" element={<Home/>}/>
      <Route path="/About" element={<About/>} />
      <Route path="/BootCamp" element={<BootCamp/>} />
      <Route path="/*" element={<Notfound/>} />
      

      </Routes>
    </>
  )
}

export default App
