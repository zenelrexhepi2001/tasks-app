import {
  GET_ADD_TODO_SUCCESS,
  GET_DELETE_TODO_SUCCESS,
  GET_FETCH_TODO_FROM_SERVER_SUCCESS,
} from "./type";

export const addTodo = (title, time) => {
  return {
    type: GET_ADD_TODO_SUCCESS,
    todoData: {title: title,time: time}
  };
};

export const fetchTodo = () => {
  return { type: GET_FETCH_TODO_FROM_SERVER_SUCCESS };
};

export const deleteTask = (todo, title) => {
  return { type: GET_DELETE_TODO_SUCCESS, todo: todo };
};
