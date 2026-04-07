import React from 'react'
import Home from './pages/Home'
import { Routes, Route} from "react-router-dom";
import Layout from './components/layout/Layout';
import About from "./pages/About";
 
const App = () => {
  return (
    <div className="min-h-screen w-full bg-white">

      <Routes>
        <Route path="/" element={<Layout/>}>

        <Route index element={<Home/>} />
        <Route path={"/about"} element={<About/>} />
        <Route path={"*"} element={<h1 className='text-3xl font-bold text-center mt-20'>404 Not Found</h1>} />
        
        </Route>
      </Routes>
      
    </div>
  )
}

export default App