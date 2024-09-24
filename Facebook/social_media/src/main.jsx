import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from './components/Form.jsx';
import { postLoader } from './components/postList.jsx';


const router=createBrowserRouter(
 [ {path:"/",element:<App/> ,loader:postLoader} ,
  {path:"/create",element:<Form/>}
 ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
\  </StrictMode>,
)


// notes
// 1. always try to call function ()=>for parmas otherwise just pass a reference function name only 
// Always try to pass the reference in the event or try to pass like ()=>{}
//if we do not pass the second param in the useeffect then it will run infinite 

// 2.why anything prints unnecessary
// ans-> it prints unnecessary because of the strict mode of react 

// 3.what is the use of useMemo 
// ans->here is a problem that if anything changes in the state or prop of any component it rerenders to stop it we use it 

// 4.if i create a function in any component and pass that compoent rerenders does it affect the function passed as prop to another 
// component 
//ans-> yes it creates impact because in js same function chanes its reference everytime whether nothing is changed

// 5.explain the use of useMemo and useCallback
// This is because of something called "referential equality".
//Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

// 6.explain the use of useMemo 
// ans->useMemo is used for memoization and it does not rerenders if the value is same but cannot be used if function passed as prop 
// because of referential equality 


// 7.explain about routes children
// ans-> if you want to access the nested routes you should use the outlet in the component where nested route is being consumed

// 8.how to make nested routes in the component routes
//ans-> use it through the children

