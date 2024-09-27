import { useReducer, useState } from 'react'
import './App.css'
import InputField from './components/inputField'
import Loop from './components/loop'
import DispatchEvent, { ToDoContext } from './store/testContext'




function App() {

  
  //const [data,setData]=useState([]);



  // using state
  
  // const Add=(obj)=>{
  //    setData((arr)=>{
  //    let res= [
  //       ...arr,
  //       obj
  //     ]

  //     return res;
  //    })
  // }

 
 

 
    // simple state
  // const Del=(key)=>{
    
  //   let newArray=data.filter((f)=>f.task!==key);
  //   setData(newArray);

  // }




  return (
    <>

<DispatchEvent>       
<div classNameName="container">
      <InputField />
      <br/>
      <Loop/>
    </div>
</DispatchEvent>
   
    
   
    </>
  )
}

export default App



// here it is wrapped inside the DispatchEvent