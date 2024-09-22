import { createContext, useReducer } from "react";

export const facebookContext = createContext({
  postArray: [],
  add: () => {},
  deleteItem: () => {},
});

function DispatchEvent({ children }) {
  const [actionData, dispatchActionData] = useReducer(dispatchFunction, []);

  function dispatchFunction(prevState, action) {
    let data = prevState;

    if (action.type === "NEW_ITEM_ADD") {
      data = [action.payload, ...data];
    } else if (action.type === "DELETE_ITEM") {
      data = data.filter((d) => d.userId !== action.payload.userId);
    }
    console.log("data::",data);
    return data;
  }

  function add(obj) {
    console.log("objIn Add", obj);
    const dispatchData = {
      type: "NEW_ITEM_ADD",
      payload: obj,
    };

    dispatchActionData(dispatchData);
  }

  function deleteItem(userId) {
    const dispatchData = {
      type: "DELETE_ITEM",
      payload: {
        userId: userId,
      },
    };

    dispatchActionData(dispatchData);
  }

  return (
    <facebookContext.Provider
      value={{
        postArray: actionData,
        add: add,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </facebookContext.Provider>
  );
}

export default DispatchEvent;
