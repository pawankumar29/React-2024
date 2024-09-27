// import { createStore } from "redux";


// const INITIAL_VALUES={
//     counter:1
// }


// const reducer=(state=INITIAL_VALUES,action)=>{
//     console.log("state::",state);
    
//     if(action.type==="INCREMENT"){
//         return {counter:state.counter+1}
//     }
//     else  if(action.type==="DECREMENT"){
//         return {counter:state.counter+1}
//     }
//     else  if(action.type==="ADD"){
//         return {counter:state.counter+Number(action.payload.num)} ;
//     }
    
//     else  if(action.type==="SUBTRACT"){
//         return {counter:state.counter-Number(action.payload.num)} ;
//     }

    

// }


// const  store=createStore(reducer);

// export default store;



import {createStore} from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false
}

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === 'INCREMENT') {
    return {...store, counter: store.counter + 1};
  } else if (action.type === 'DECREMENT') {
    return {...store, counter: store.counter - 1};
  } else if (action.type === 'ADD') {
    return {...store, counter: store.counter + Number(action.payload.num)};
  } else if (action.type === 'SUBTRACT') {
    return {...store, counter: store.counter - Number(action.payload.num)};
  } else if (action.type === 'PRIVACY_TOGGLE') {
    return {...store, privacy: !store.privacy};
  }
  return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;



