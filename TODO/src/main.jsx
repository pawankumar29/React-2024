import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// 1.use ref provide the refernece only and used to persist the value without rerenders  whatever we do  to get the element like .getElementByid and all same 
// property works 

// 2.always do the functional update because react is async and if i am using previous value it will crate problem 

// why should we do functional update
//ans->because in react it runs async and we can get wrong value 
// eg const Add=(obj)=>{
  //  setData((arr)=>{
  //   let res= [
  //      ...arr,    here the previous value is arr 
  //      obj
  //    ]

  //    return res;
  //   })      
 //}


 //4. what is the use of useReducer 
 // ans->when we have to update the state then we have to take all the previous value and then make new array and then do it but here you do not need it you just 
 // have to tell that which type of change is it and what chnaged it focuses on only one part 

 // 5. How to use the reducer 
 // ans-> const [item,dispatch] = useReducer(action Function,intialValue)

