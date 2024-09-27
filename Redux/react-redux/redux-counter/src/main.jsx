import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import counterStore from "./store/index.js"

console.log("store::",counterStore);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={counterStore}><App />
    </Provider>
  </StrictMode>,
)


// how to use redux 
// redux is basically a global store 
// uses : useSelector((s)=>s)  // to access values 
// useDispatch :TO perform any action to do the change in the object 
// provider should be provided in the app.jsx 
