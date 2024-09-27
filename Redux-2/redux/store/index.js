import {createStore} from "redux";



const INITIAL={
    counter:0,
    privacy:false
}
const reducerFun=(state=INITIAL,action)=>{
    console.log("state::",state);
    if(action.type==="ADD"){
         return {...state,counter:state.counter+1}
    }
    else  if(action.type==="SUB"){
        return {...state,counter:state.counter-1}
   }
   else  if(action.type==="INC"){
    return {...state,counter:state.counter+1}
}
else  if(action.type==="DEC"){
    return {...state,counter:state.counter-1}
}

  return state;
}



  const store=createStore(reducerFun);
  
  export default store;