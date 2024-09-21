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
            return     <div className="row" key={m.task}>
                    <div className="col-4">
                        {m.task}
                    </div>
                    <div className="col-4">
                        {m.date}
                    </div>

                    <div className="col-4">
                    <button type="button" className="btn btn-danger" onClick={ ()=>Delete(m.task)}>Delete</button>

                    </div>
                 </div>
            })
        }
        </>
    )
}

export default Loop ;

// if u want to call the function when event called use arrow function i am talking about params