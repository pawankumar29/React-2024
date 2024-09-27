
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  
 const counter=useSelector(state=>state)
 console.log("state::",state);
  const dispatch=useDispatch();
  const handleAdd=()=>{
       dispatch({type:"ADD"});
  }

  const handleSub=()=>{
    dispatch({type:"SUB"});
}
  return (
    <>
    <div>Counter:{0}</div>
    <div>
      <button onClick={handleAdd}>Inc</button>
      <br/>
      <button onClick={handleSub}>Dec</button>

    </div>
    </>
  )
}

export default App
