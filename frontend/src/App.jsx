import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Forgotpassword from './pages/Forgotpassword'
import About from './pages/About'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>  </Route>
      <Route path='/signup' element={<Signup/>}></Route> 
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    
   
     
    </BrowserRouter>
    </>
  )
}

export default App
