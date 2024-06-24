import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Setting from './pages/Setting'
import About from './pages/About'
import Navbar from './pages/Navbar'
import { Theme, ThemeProvider } from './pages/Theme'

import './App.css'


function App() {

  return (


    <div className="app" id='app'>

      <ThemeProvider>

        <BrowserRouter>
          <div>
            <Navbar />
          </div>


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/*' element={<div>page not found</div>} />
          </Routes>
        </BrowserRouter>

      </ThemeProvider>

    </div>
  )
}

export default App
