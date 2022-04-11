import { GET_PERCENTAGE_TODO_ADD_USER,GET_RESET_PERCENTAGE_TODO_ADD_USER } from "../actions/type";


export default (state = 0, action) => {
    switch(action.type) {
        case GET_PERCENTAGE_TODO_ADD_USER:
            return state + 1
        case GET_RESET_PERCENTAGE_TODO_ADD_USER:
            return (state = 0)
            default:
                return state
    }
}