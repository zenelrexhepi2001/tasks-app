import { GET_ADD_TODO_SUCCESS, GET_DELETE_TODO_SUCCESS, GET_FETCH_TODO_FROM_SERVER_SUCCESS } from '../actions/type';
import TasksCategory from '../models/TasksCategory';
import GET_TASKS_DATA from '../data/data-tasks';

const INITIAL_STATE = {
    dataTasks: [],
    dataFilter: GET_TASKS_DATA.filter((task) => task.id === 1),
}

export default (state = INITIAL_STATE, action) => {
      switch(action.type) {
          case GET_ADD_TODO_SUCCESS:
              const newTodo = new TasksCategory(new Date().toString(),
              action.todoData.title,
              action.todoData.time,
              )
              return {
                  ...state,
                  dataTasks: state.dataTasks.concat(newTodo),
              }
        
          case GET_FETCH_TODO_FROM_SERVER_SUCCESS:
                return {
                    ...state,
                    dataTasks: action.payload,
                }

          case GET_DELETE_TODO_SUCCESS:
              return {
                 ...state,
                  dataTasks: state.dataTasks.filter((task) => task.id !== action.taskId),
                  dataTasks: action.paylaod,
              }

              default:
                  return state
      }
}