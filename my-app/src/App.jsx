


import { Route, Routes } from 'react-router'
import './App.css'

import AboutComponent from './component/header/about/About'
import HomeComponent from './component/header/WebVx/webvx'
import Allprojects from './component/header/All Projects/Allprojects'
import Community from './component/header/Community/Community'





function App() {

  return (
    <>
    <Routes>
    <Route index element={<HomeComponent />} />  
    <Route path="/allprojects" element={<Allprojects />} />
    <Route path="/community" element={<Community/>} />
    <Route path="/aboutus" element={<AboutComponent />} />
    </Routes>
    
    </>
  )
}

export default App
