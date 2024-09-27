import { useContext } from "react";
import { ToDoContext } from "../store/testContext";

function Loop(props){
    const {todoItems,deleteItem}=useContext(ToDoContext)


    function Delete(key){
        deleteItem(key)
    }

    return(
        <>
        {
            todoItems.map((m)=>{
            return     <div classNameName="row" key={m.task}>
                    <div classNameName="col-4">
                        {m.task}
                    </div>
                    <div classNameName="col-4">
                        {m.date}
                    </div>

                    <div classNameName="col-4">
                    <button type="button" classNameName="btn btn-danger" onClick={ ()=>Delete(m.task)}>Delete</button>

                    </div>
                 </div>
            })
        }
        </>
    )
}

export default Loop ;

// if u want to call the function when event called use arrow function i am talking about params