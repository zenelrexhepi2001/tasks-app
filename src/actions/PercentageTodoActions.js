import {GET_PERCENTAGE_TODO_ADD_USER,GET_RESET_PERCENTAGE_TODO_ADD_USER} from './type';

export const IncrementTodo = () => {
    return {type: GET_PERCENTAGE_TODO_ADD_USER}
}

export const  ResetProgressTodo = () => {
    return {type: GET_RESET_PERCENTAGE_TODO_ADD_USER};
}