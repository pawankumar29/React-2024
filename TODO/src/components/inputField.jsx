import { useContext, useEffect, useRef, useState } from "react";
import { ToDoContext } from "../store/testContext";

function InputField(props){

    const [task,setTask]=useState("");
    const [date,setDate]=useState("");

    const {add} =useContext(ToDoContext);

    const setDataRef=useRef("");

    function addTask(e){
        setTask(e.target.value);

    }

    function addDate(e){
        setDate(e.target.value);

    }

    function sendToParent(){
   // setDataRef.current.value="pawam";

        add({
            task,date
        })
    }


    return(
        <>
        <div className="row">
            <div className="col-4">
                <input type="text" placeholder="Enter Task" ref={setDataRef}    onChange={addTask}/>
            </div>
            <div className="col-4">
                <input type="date" onChange={addDate}/>
            </div>
            <div className="col-4">
            <button type="button" className="btn btn-success" onClick={sendToParent}>Add</button>

            </div>
        </div>
        </>
    )
}

export default InputField;


