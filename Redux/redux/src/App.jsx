
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  
 const counter=useSelector(state=>state.counter)
 console.log("state::",counter);
  const dispatch=useDispatch();
  const handleAdd=()=>{
       dispatch({type:"ADD"});
  }

  const handleSub=()=>{
    dispatch({type:"SUB"});
}
  return (
    <>
    <div>Counter:{counter}</div>
    <div>
      <button onClick={handleAdd}>Inc</button>
      <br/>
      <button onClick={handleSub}>Dec</button>

    </div>
    </>
  )
}

export default App
