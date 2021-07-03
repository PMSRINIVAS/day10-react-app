import { createStore, applyMiddleware } from "@reduxjs/toolkit";

// import ReduxThunk from "redux-thunk";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  counter: 100,
  todoList: [],
  serverTodoList: [],
};

//DEFINE YOUR RE-USABLE ACTIONS
const INCREMENT_ACTION_TYPE = "INCREMENT_ACTION_TYPE";
const DECREMENT_ACTION_TYPE = "DECREMENT_ACTION_TYPE";
const ADD_TODO_ACTION_TYPE = "ADD_TODO_ACTION_TYPE";

//READ THE DATE FROM THE DATABASE SERVER
const GET_SERVER_TODO_ACTION_TYPE = "GET_SERVER_TODO_ACTION_TYPE";

export function incrementAction() {
  //WE ARE UPDATING THE UI
  return { type: INCREMENT_ACTION_TYPE };
}

export function decrementAction() {
  //WE ARE UPDATING THE UI
  return { type: DECREMENT_ACTION_TYPE };
}

export function addTodoAction(payload) {
  //WE ARE UPDATING THE UI
  return { type: ADD_TODO_ACTION_TYPE, payload: payload };
}

//THIS ACTION WILL GET YOU THE DATA FROM THE SERVER
//NETWORK CALL(ie. async)
export function getTodoListAction() {
  return async (dispatch) => {
    //API CALL
    const url = `https://jsonplaceholder.typicode.com/todos`; //THIS WILL BE OUR SERVER API
    const response = await axios.get(url); //this is a network call

    //UPDATE THE UI
    console.log(response.data);
    dispatch({ type: GET_SERVER_TODO_ACTION_TYPE, payload: response.data });
  };
}

//ACTION :: TYPE & PAYLOAD
function AppReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT_ACTION_TYPE:
      const newCounter = state.counter + 100;
      return { ...state, counter: newCounter };

    case DECREMENT_ACTION_TYPE:
      const newCounter1 = state.counter - 10;
      return { ...state, counter: newCounter1 };

    case ADD_TODO_ACTION_TYPE:
      const newtodolist = [action.payload, ...state.todoList];
      return { ...state, todoList: newtodolist };

    case GET_SERVER_TODO_ACTION_TYPE:
      return { ...state, serverTodoList: action.payload };
    default:
      return state;
  }
}
// const store = createStore(AppReducer);
const store = createStore(AppReducer, applyMiddleware(thunk));
export { store };
