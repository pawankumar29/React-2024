import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import Form from './components/Form'
import PostList from './components/postList'
import DispatchEvent from '../../../TODO/src/store/testContext'

function App() {

  const [option,optionSelected]=useState("home");
 

  return (
    <DispatchEvent>
    <div className="container">
    <Sidebar option={option} optionSelected={optionSelected}/>
    <div className='body'>
    <Header/>
    {option==="form"? <Form/>:<PostList/>}
    <Footer/>
    </div>

    </div>
    </DispatchEvent>
     
    
  )
}

export default App
