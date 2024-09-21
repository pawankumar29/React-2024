import { createContext, useReducer } from "react";

export const ToDoContext = createContext({
  todoItems: [],
  add: () => {},
  deleteItem: () => {},
});

function DispatchEvent({ children }) {
  const [data, dispatchData] = useReducer(dispatchFunction, []);

  function dispatchFunction(prevState, action) {
    let dataSent = prevState;
    console.log("dispatch::");
    if (action.type === "NEW_ITEM") {
      dataSent = [
        ...prevState,
        {
          task: action.payload.task,
          date: action.payload.date,
        },
      ];
    } else if (action.type === "DELETE_ITEM") {
      let newArray = prevState.filter((f) => f.task !== action.payload.task);
      dataSent = [...newArray];
    }
    return dataSent;
  }

  const Add = (obj) => {
    const dispatchItem = {
      type: "NEW_ITEM",
      payload: obj,
    };
    dispatchData(dispatchItem);
  };

  const Del = (key) => {
    const dispatchItem = {
      type: "DELETE_ITEM",
      payload: {
        task: key,
      },
    };
    dispatchData(dispatchItem);
  };

  return (
    <ToDoContext.Provider
      value={{
        todoItems: data,
        add: Add,
        deleteItem: Del,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export default DispatchEvent;
