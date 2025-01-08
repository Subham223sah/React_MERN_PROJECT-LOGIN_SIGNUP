import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./components/SignUp";
import Login from "./components/Login"
import Home from "./components/Home"

import { Routes, BrowserRouter, Route } from 'react-router-dom'
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
