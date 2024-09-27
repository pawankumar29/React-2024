import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import Form from './components/Form'
import PostList from './components/postList'
import DispatchEvent from '../../../TODO/src/store/testContext'
import { Outlet, useLoaderData } from 'react-router-dom'


function App() {

  const [option,optionSelected]=useState("home");
     const postArray=useLoaderData();
 

  return (
    <DispatchEvent>
    <div classNameName="container">
    <Sidebar option={option} optionSelected={optionSelected}/>
    <div classNameName='body'>
    <Header/>
    {/* {option==="form"? <Form/>:<PostList/>} */}
    <Outlet/>
    <PostList postArray={postArray} />
    <Footer/>
    </div>

    </div>
    </DispatchEvent>
     
    
  )
}

export default App
