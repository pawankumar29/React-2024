
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useRef } from 'react';
import { counterAction } from './store/counter';
import { privacyAction } from './store/privacy';



function App() {

  const inputRef=useRef();

  

  
  const counter=useSelector(state=>state.counter);
  console.log("state::",counter);

  const dispatch=useDispatch();

  const handleInc=()=>{
     dispatch(counterAction.increment())
  }

  const handleDec=()=>{
    dispatch(counterAction.decrement())

 }

 const handleAdd=()=>{
  dispatch(counterAction.add(inputRef.current.value))
}

const handleSub=()=>{
 
  dispatch(counterAction.subtract(inputRef.current.value))

}



  return (
    <>
    <div>
      counter:{counter.counter}
      <div className="input">
        <input ref={inputRef} type='number'></input>
      </div>
      <div className="buttons">
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
      </div>
    </div>
    
    
   
    </>
  )
}

export default App
